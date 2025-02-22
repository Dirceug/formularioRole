import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const noiteDaFogazza = [
  {
    nome: "Fogazza de Frango",
    ingredientes: "Lorem ipsum dolor sit amet, consectetur.",
    valor: 12.50,
    imagem: "https://drive.google.com/uc?export=download&id=1tww6Nx7Q9FMlTo5NcqEC8T5D6h61OfAA",
    estoque: 50,
  },
  {
    nome: "Fogazza Vegetariana",
    ingredientes: "Lorem ipsum dolor sit amet, consectetur.",
    valor: 12.50,
    imagem: "https://drive.google.com/uc?export=download&id=1OrPOJPT17-LwqjHIjLdScccKPaNuu771",
    estoque: 50,
  },
  {
    nome: "Fogazza de Costela",
    ingredientes: "Lorem ipsum dolor sit amet, consectetur.",
    valor: 12.50,
    imagem: "https://drive.google.com/uc?export=download&id=1eM_Hah5lw6H7qCgwfBcNXUOh8jb6sQPW",
    estoque: 50,
  },
  {
    nome: "Fogazza de Pizza",
    ingredientes: "Lorem ipsum dolor sit amet, consectetur.",
    valor: 12.50,
    imagem: "https://drive.google.com/uc?export=download&id=1PQ22z89MZrUJFdRBQaJHwcMLn7IcIBd-",
    estoque: 50,
  },
  {
    nome: "Fogazza de Brócolis",
    ingredientes: "Lorem ipsum dolor sit amet, consectetur.",
    valor: 12.50,
    imagem: "https://drive.google.com/uc?export=download&id=15DtamJ6plnpcIBM2z-Jf3mvd8Av6VJ0s",
    estoque: 50,
  },
  {
    nome: "Fogazza de Chocolate",
    ingredientes: "Lorem ipsum dolor sit amet, consectetur.",
    valor: 12.50,
    imagem: "https://drive.google.com/uc?export=download&id=1TrGvKzMMy7UfiEolfMihEjewC9gI3DsP",
    estoque: 50,
  },
  {
    nome: "Fogazza de Abacaxi",
    ingredientes: "Lorem ipsum dolor sit amet, consectetur.",
    valor: 12.50,
    imagem: "https://drive.google.com/uc?export=download&id=11R_atzmBpngTSA1na511sOTIJy1M2m28",
    estoque: 50,
  },
];

const addProductsToFirestore = async () => {
  try {
    const productsCollection = collection(db, 'products');
    noiteDaFogazza.forEach(async (product) => {
      await addDoc(productsCollection, product);
    });
    console.log('Produtos adicionados com sucesso!');
  } catch (e) {
    console.error('Erro ao adicionar produtos: ', e);
  }
};

addProductsToFirestore();