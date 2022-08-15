/* Swiper Configuration */
const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/*api picsum.photos*/
const loadPicsum = async () => {
  try {
    const Answer = await fetch(`https://picsum.photos/v2/list?page=1&limit=4`);
    console.log(Answer, "promise");
    if (Answer.status == 200) {
      const data = await Answer.json();
      console.log(data, "data");
      let info = "";
      data.forEach((Photos) => {
        info += `
        <div class="swiper-slide" id="swiper-slide">
        <img class="swiper-img"
                src="${Photos.download_url}"
                alt="caca1"></img></div>   
`;
      });

      document.getElementById("swiper-wrapper").innerHTML = info;
    } else if (Answer.status == 401) {
      console.log("No hay conexion a internet");
    } else if (Answer.status == 404) {
      console.log("no existe el vuelo");
    } else {
      console.log("Ocurrio un Error desconocido");
    }
  } catch (error) {
    console.log(error);
  }
};

loadPicsum();

/*Like Change */ /* Primero el svg me venia x defecto likeado, asi que fui al svg y le cambie el color sacando la propiedad fill*/
const Heart = document.querySelector(".heart");
const Like = document.querySelector(".like");
Heart.addEventListener("click", () => {
  if (Heart.src.match("../icons/heart.svg")) {
    /* si el icono svg esta  */
    Heart.src = "../icons/like.svg";
    Heart.style.transform = "scale(1.5)";
    setTimeout(() => {
      Heart.style.transform = "scale(1)";
    }, 100);
  } else {
    Heart.src = "../icons/heart.svg";
  }
});
/* 2da forma de hacerlo:
tambien podemos usar en ves de match, includes que me parece mejor.
if (heart.src.includes('heartEmpty')) {*/

/* Comment */
const CommentIcon = document.querySelector(".comment");
const Input = document.querySelector(".messages");
CommentIcon.addEventListener("click", () => {
  Input.focus(); /*Con focus hacemos que al apretar click en el icono se
valla automaticamente al input para escribir*/
});
/* Sent comment*/
const CommentContainer = document.querySelector(".commentContainer");
const PostButton = document.querySelector(".post");
PostButton.addEventListener("click", () => {
  if (Input.value !== "") {
    /* si Cuando clickiemos en el boton hay algo escrito en el input */
    let Sent =
      Input.value; /*Cuando clickiemos en el boton, enviamos el valor del input*/
    let paragraph =
      document.createElement(
        "p"
      ); /*Creamos mas p dentro del contenedor por cada comentario*/
    paragraph.innerHTML = `<strong>Comment</strong><span>${Sent}</span>`; /*igualamos el elemento p a esto para q esto se muestre y no solo el elemento p*/
    CommentContainer.appendChild(
      paragraph
    ); /* con esto le decimos a paragraph que se ponga dentro de Chat*/
    Input.value =
      ""; /* Con esto eliminamos el valor del input una ves que lo mandamos*/
  }
});
