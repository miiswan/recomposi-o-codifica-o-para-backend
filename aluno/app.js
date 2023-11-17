const people = document.getElementById("people");
const avatar = document.getElementById("img-people");
const job = document.getElementById("job");
const descricao = document.getElementById("descricao");
const botaoVoltar = document.querySelector("botaoVoltar");
const botaoProximo = document.querySelector("botaoProximo");
const botaoSurpresa = document.querySelector("botaoSurpresa");

let currentItem = 0;

function mostrarPessoa(person) {
  const item = review[person];
  avatar.src = item.image;
  author.textContent = item.name;
  job.textContent = item.job;
  description.textContent = item.text;
}

function prev() {
  if (currentItem < 0) {
    currentItem = review.lenght - 1;
  }

  mostrarPessoa(currentItem);

  currentItem--;
}

function next() {
  if (currentItem > review.lenght - 1) {
    currentItem = 0;
  }

  mostrarPessoa(currentItem);
  currentItem++;
}

function random() {
  const pessoaAleatoria = Math.floor(Math.random() * review.length);
  mostrarPessoa(pessoaAleatoria);
}
// local reviews data
const review = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    image: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up",
  },

  {
    id: 2,
    name: "Anna Johnson",
    job: "Web Designer",
    image: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
    text: "Helvetica artisan kindfolk thundercats. Disrupt glossier gastropub deep v vice frazen.",
  },

  {
    id: 3,
    name: "Peter Junes",
    job: "Intern",
    image: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
    text: "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",
  },

  {
    id: 4,
    name: "Bill Anderson",
    job: "The Boss",
    image: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
    text: "Edison bulp put a bird on it humblebrag, marfa pok pok heirloom fashion axe crazy stumptown venmo actually seitan.",
  },
];
