if (true) {
    let animationRunning = true; // 标志变量，控制动画函数的运行
    const explanation = document.querySelector('.ai-explanation');
    const abstract_value = document.querySelector('.ai-explanation-none').innerHTML;
    const post_ai = document.querySelector('.post-ai');
    let ai_str = '';
    let ai_str_length = '';
    let delay_init = 600;
    let i = 0;
    let j = 0;
    let sto = [];
    let elapsed = 0;
    const animate = (timestamp) => {
      if (!animationRunning) {
        return; // 动画函数停止运行
      }
      if (!animate.start) animate.start = timestamp;
      elapsed = timestamp - animate.start;
      if (elapsed >= 20) {
        animate.start = timestamp;
        if (i < ai_str_length-1) {
          let char = ai_str.charAt(i+1);
          let delay = /[,.，。!?！？]/.test(char) ? 150 : 20;
          if(explanation.firstElementChild){
            explanation.removeChild(explanation.firstElementChild);
          }
          explanation.innerHTML += char;
          let div = document.createElement('div');
          div.className = "ai-cursor";
          explanation.appendChild(div);
          i++;
          if(delay === 150){
            document.querySelector('.ai-explanation .ai-cursor').style.opacity = "0";
          }
          if(i === ai_str_length-1){
            observer.disconnect();// 暂停监听
            explanation.removeChild(explanation.firstElementChild);
          }
          sto[0] = setTimeout(() => {
            requestAnimationFrame(animate);
          }, delay);
        }
      } else {
        requestAnimationFrame(animate);
      }
    };
    const observer = new IntersectionObserver((entries) => {
      let isVisible = entries[0].isIntersecting;
      animationRunning = isVisible; // 标志变量更新
      if(animationRunning){
        delay_init = i===0 ? 200 : 20;
        sto[1] = setTimeout(() => {
          if(j){
            i = 0;
            j = 0;
          }
          if(i===0){
            explanation.innerHTML = ai_str.charAt(0);
          }
          requestAnimationFrame(animate);
        }, delay_init);
      }
    }, { threshold: 0 });
    function clearSTO(){
      if(sto.length){
        sto.forEach((item)=>{
          if(item){
            clearTimeout(item);
          }
        });
      }
    }
    function startAI(str,df=true){
      i = 0;//重置计数器
      j = 1;
      clearSTO();
      animationRunning = false;
      elapsed = 0;
      if(df){
        explanation.innerHTML = '生成中. . .';
      }else{
        explanation.innerHTML = '请等待. . .';
      }
      ai_str = str;
      ai_str_length = ai_str.length;
      observer.disconnect();// 暂停上一次监听
      observer.observe(post_ai);//启动新监听
    }
    function aiIntroduce(){
      startAI('我是文章辅助AI: xwysyy-AI，点击下方的按钮，让我生成本文简介、前往主页等。');
    }
    function aiAbstract(){
      startAI(abstract_value);
    }
    function aiRecommend(){
      i = 0;//重置计数器
      j = 1;
      clearSTO();
      animationRunning = false;
      elapsed = 0;
      explanation.innerHTML = '生成中. . .';
      ai_str = '';
      ai_str_length = '';
      observer.disconnect();// 暂停上一次监听
      sto[2] = setTimeout(() => {
        explanation.innerHTML = recommendList();
      }, 600);
    }
    function aiGoHome(){
      startAI('正在前往博客主页...',false);
      sto[2] = setTimeout(() => {
        pjax.loadUrl("/");
      }, 1000);
    }
    const ai_btn_item = document.querySelectorAll('.ai-btn-item');
    ai_btn_item.forEach((item, index)=>{
      item.addEventListener('click', ()=>{
        switch(index) {
          case 0:
            aiIntroduce();
            break;
          case 1:
            aiAbstract();
            break;
          case 2:
            aiRecommend();
            break;
          case 3:
            aiGoHome();
          break;
        } 
      });
    });

    aiIntroduce();
   }
