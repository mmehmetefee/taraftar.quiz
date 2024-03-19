//Veri havuzu
const takimlar = [
    { ad: "BEŞİKTAŞ", src: "images/besiktas.png",sampiyonluk: 16 , stad:"İnönü"},
    { ad: "FENERBAHÇE", src: "images/fenerbahce.png" ,sampiyonluk: 19,stad:"Saraçoğlu"},
    { ad: "GALATASARAY", src: "images/galatasaray.png", sampiyonluk: 23,stad:"Ali Sami Yen"},
    { ad: "TRABZONSPOR", src: "images/trabzonspor.png", sampiyonluk: 7, stad:"Avni Aker" },
];

//Sık kullanılan HTML nesneleri
const takim=document.getElementById("takim");
const btnBasla=document.getElementById("btnBasla");
const soru=document.getElementById("soru");
const secenekler=document.getElementById("secenekler");
const sonuc=document.getElementById("sonuc");

//Olay yakalyıcı
btnBasla.addEventListener("click",yaris);

//Fonksiyon tanımı
// Soruların bulunduğu bir dizi
const sorular = [
    "kaç kez şampiyon olmuştur?",
    "hangi stadı kullanmaktadır?",
    "hangi yıl kurulmuştur?",
    // İsterseniz daha fazla soru ekleyebilirsiniz
];

function yaris(){
    soru.innerHTML="";
    secenekler.innerHTML="";

    let rastgeleTakim = Math.floor(Math.random() * takimlar.length);
    takim.src=takimlar[rastgeleTakim].src;
    soru.innerHTML=takimlar[rastgeleTakim].ad+" kaç kez şampiyon olmuştur?";
    
    // Cevap seçeneklerini rastgele oluşturan döngü
    let cevaplar = [];
    for (let i = 0; i < 4; i++) {
        let rastgeleIndex = Math.floor(Math.random() * takimlar.length);
        cevaplar.push(takimlar[rastgeleIndex].sampiyonluk);
    }

    // Cevap seçeneklerini karıştırma
    cevaplar = shuffle(cevaplar);

    // Cevap seçeneklerini ekrana ekleyen döngü
    for (let i = 0; i < cevaplar.length; i++) {
        const secenek = document.createElement("button");
        secenekler.appendChild(secenek);
        secenek.setAttribute("id", "secenek" + (i + 1));
        secenek.classList.add("secenek");
        secenek.innerHTML = cevaplar[i];

        secenek.addEventListener("click", function() {
            if (parseInt(secenek.innerHTML) === takimlar[rastgeleTakim].sampiyonluk) {
                sonuc.innerHTML = "Tebrikler, doğru cevap!";
            } else {
                sonuc.innerHTML = "Maalesef, yanlış cevap!";
            }
            btnBasla.disabled = false;
        });
    }
}

// Diziyi karıştıran fonksiyon
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}