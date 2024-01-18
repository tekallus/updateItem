import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1
  },
  {
    id: 1,
    name: "Peynir",
    count: 5
  },
  {
    id: 2,
    name: "Makarna",
    count: 2
  }
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);
  // "+"" butonuna tıkladığınızda ilgili sayıyı artıran
  // handleIncreaseClick mantığını doldurun:
  function handleIncreaseClick(productId) {
    // Mevcut ürünleri
    //React'te bir önemli kural olan "state doğrudan değiştirilmemelidir"  bu yuzden
    //Mevcut products state'ini spread operatörü ([...products]) kullanimiyla kopyalayarak orijinal state'i değiştirmeden  bir kopya üzerinde çalışmak icin;
    const updatedProducts = [...products];
    //Kopyalanan ürünler arasında, productId ile eşleşen ürünü bulmak icin:
    const selectedProduct = updatedProducts.find(
      (product) => product.id === productId
    );
    // Ürün varsa sayısını artır
    if (selectedProduct) {
      selectedProduct.count += 1;
      // State'i güncelle
      setProducts(updatedProducts);
    }
  }
  //sonuc olarak bu fonksiyon, belirli bir productId'ye sahip ürünün sayısını 1 artırarak, bu güncellenmiş ürün listesini setProducts fonksiyonu aracılığıyla state'e uygular.
  // Bu sayede React, state'teki güncellemeleri algılar ve bileşenin yeniden render edilmesini sağlar.
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
