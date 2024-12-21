onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
  
      const titles = "LOVE YOU ALAM SEMESTAKU".split("");
      const subtitles = "Adik minta maaf ya bun, masi sering buat bunda marah. Thank you for all the patience that never runs out, I really appreciate it all. Bunda, I know we're gettin' old, And I know you did all you could. Just to make sure my life was good. Im sorry for the fights and the tone of my voice, Sorry for the nights when I made the wrong choice.".split("");
      const newTitles = " I love you with all my heart mom".split(""); // Teks baru
      
      const titleElement = document.getElementById("title");
      const subtitleElement = document.getElementById("subtitle");
      const newTitleElement = document.getElementById("newTitle"); // Elemen untuk teks baru
      
      let index = 0;
  
      function appendTitle() {
        if (index < titles.length) {
          titleElement.innerHTML += titles[index];
          index++;
          setTimeout(appendTitle, 300); // Delay antar huruf
        } else {
          // Setelah selesai menulis "LOVE YOU ALAM SEMESTAKU", lanjutkan ke subtitle
          index = 0;
          setTimeout(appendSubtitle, 300);
        }
      }
  
      function appendSubtitle() {
        if (index < subtitles.length) {
          subtitleElement.innerHTML += subtitles[index];
          index++;
          setTimeout(appendSubtitle, 300); // Delay antar huruf
        } else {
          // Setelah selesai menulis subtitle, lanjutkan ke teks baru
          index = 0;
          setTimeout(appendNewTitle, 500);
        }
      }
  
      function appendNewTitle() {
        if (index < newTitles.length) {
          newTitleElement.innerHTML += newTitles[index];
          index++;
          setTimeout(appendNewTitle, 300); // Delay antar huruf
        }
      }
  
      appendTitle(); // Mulai proses dari elemen judul utama
  
      clearTimeout(c);
    }, 1000);
  };
  