interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

interface LoginTypes {
  email: string;
  password: string;
}

interface AddProduct {
  title: string;
  price: number | string;
  description: string;
}
