import React, { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: "Madhubani Fish Necklace",
    price: "₹ 79",
    image: "https://i.pinimg.com/564x/1b/3b/15/1b3b1537e3187815b67c61440eebb9d9.jpg",
    description: "A necklace featuring a hand-painted Madhubani-style fish pendant on a vibrant red cord.",
  },
  {
    id: 2,
    name: "Bohemian Seashell Earrings",
    price: "₹ 59",
    image: "https://images.meesho.com/images/products/194362691/lfsss_512.webp",
    description: "Red wooden disc earrings adorned with shells and metal accents, perfect for a beachy boho look.",
  },
  {
    id: 3,
    name: "Bohemian Necklace",
    price: "₹ 129",
    image: "https://res.cloudinary.com/hamstech/images/w_864,h_648/f_auto,q_auto/v1646464937/Hamstech%20App/Handmade-Necklace/Handmade-Necklace.jpg?_i=AA",
    description: "A colorful, handcrafted necklace with a mix of metal and fabric elements.",
  },
  {
    id: 4,
    name: "Phuljhadi Earrings",
    price: "₹ 390",
    image: "https://phuljhadi.com/cdn/shop/files/0J7A0278copy_700x.jpg?v=1716021021",
    description: "Vibrant, handcrafted beaded earrings with tassels.",
  },
  {
    id: 5,
    name: "Peacock Feather Earrings",
    price: "₹ 200",
    image: "https://miro.medium.com/v2/resize:fit:1128/0*82TzNJuNuE0qASMo",
    description: "Elegant earrings made with real peacock feathe₹ and white beads.",
  },
  {
    id: 6,
    name: "Handmade Silk Thread Jewellery Set",
    price: "₹ 190",
    image: "https://5.imimg.com/data5/ANDROID/Default/2022/1/JB/LG/KQ/33378158/product-jpeg-500x500.jpg",
    description: "A beautiful set of necklace and earrings made with silk thread.",
  },
  {
    id: 7,
    name: "Bicycle Key Holder",
    price: "₹ 79",
    image: "https://i.pinimg.com/564x/92/f6/cd/92f6cd92965e52d180efdea08844bb93.jpg",
    description: 'A wooden key holder featuring a bicycle design and the words "Enjoy the Ride."',
  },
  {
    id: 8,
    name: "Peacock Wall Art",
    price: "₹ 590",
    image: "https://i.pinimg.com/564x/70/40/c8/7040c8a0191049adf3835bb5aa52d4df.jpg",
    description: "A vibrant handmade peacock decoration, perfect for adding a touch of elegance to your home.",
  },
  {
    id: 9,
    name: "Diwali Hanging Toran",
    price: "₹ 129",
    image: "https://i.pinimg.com/564x/ed/87/e2/ed87e270d5aa523512641bf1e359b8c9.jpg",
    description: "Traditional decorative piece for Diwali.",
  },
  {
    id: 10,
    name: "Lippan Wall Decor",
    price: "₹ 390",
    image: "https://i.pinimg.com/564x/8a/1e/db/8a1edb3fe7f4cd817b735a7e01bab2e6.jpg",
    description: "Traditional fine art of Rajasthan and Gujarat's desert regions.",
  },
  {
    id: 11,
    name: "Ring Holder made of Spoons",
    price: "₹ 990",
    image: "https://i.pinimg.com/564x/e1/4d/49/e14d49212b90493d85c5ef0b9f890f94.jpg",
    description: "Unique ring holder designed with spoons, perfect for a traditional touch.",
  },
  {
    id: 12,
    name: "Mirror Work",
    price: "₹ 200",
    image: "https://i.pinimg.com/564x/4f/87/ea/4f87ead49045a0bc138a16f2fd31615f.jpg",
    description: "A beautiful illustration of peacocks adorned with intricate mirror work embroidery.",
  },{
    id: 13,
    name: "Pizza",
    price: "₹ 100",
    image: "https://wallpaperaccess.com/full/767048.jpg",
    description: "Classic cheesy pizza topped with your favorite savory delights.",
  },
  {
    id: 14,
    name: "Manchurian Balls",
    price: "₹ 50",
    image: "https://th.bing.com/th/id/OIP.ftYyDUCbXleMsadFbsYDIgHaLH?₹=1&pid=ImgDetMain",
    description: "Crispy vegetable balls in a tangy Indo-Chinese gravy.",
  },
  {
    id: 15,
    name: "Pavbhaji",
    price: "₹ 129",
    image: "https://th.bing.com/th/id/OIP.Hb_lNF0ZDfkNxGBwdqXAIQHaE8?₹=1&pid=ImgDetMain",
    description: "Spicy mashed vegetable curry served with buttery pav, a street food favorite.",
  },
  {
    id: 16,
    name: "Puranpoli",
    price: "₹ 200",
    image: "https://th.bing.com/th/id/OIP.V5k-dp_llB4nOQs6X_bZlgHaHa?₹=1&pid=ImgDetMain",
    description: "Sweet and soft flatbread stuffed with spiced lentil filling.",
  },
  {
    id: 17,
    name: "Modak",
    price: "₹ 150",
    image: "https://th.bing.com/th/id/OIP.SSU4a2sxC4uQTV9SDmLZkQHaEK?₹=1&pid=ImgDetMain",
    description: "Traditional sweet dumplings filled with coconut and jaggery, perfect for festive cravings.",
  },
  {
    id: 18,
    name: "Bhakri Chutney",
    price: "₹ 190",
    image: "https://th.bing.com/th/id/R.397ad0987534c49d6cce3f94240e957f?rik=XB%2bbtzoXRolu2g&riu=http%3a%2f%2fwww.archanaskitchen.com%2fimages%2farchanaskitchen%2f1-Author%2fMadhuli_Ajay%2fRice_Bhakri.jpg&ehk=Ap76NDnB15gJ8DeJBPIwN7n1lKiy8ZUtt2yBYAnna8A%3d&risl=&pid=ImgRaw&r=0",
    description: "Crispy millet flatbread paired with spicy chutney for a rustic taste.",
  }, {
    id: 19,
    name: "Floral Patchwork Jacket",
    price: "₹ 790",
    image: "https://i.pinimg.com/564x/44/fb/2b/44fb2bd3aa8fc052a3b9f46ffddbc7b7.jpg",
    description: "Floral jacket with plaid accents and ruffled collar.",
  },
  {
    id: 20,
    name: "Patchwork Dress",
    price: "₹ 592",
    image: "https://i.pinimg.com/564x/6d/2c/ab/6d2cabced26398f963f3b697054abb18.jpg",
    description: "A casual dress featuring a black top with a mixed-pattern patchwork skirt.",
  },
  {
    id: 21,
    name: "Floral Dress",
    price: "₹ 1290",
    image: "https://i.pinimg.com/736x/ba/38/c1/ba38c1b469f9f2502b749a3d434e13e3.jpg",
    description: "A stylish garment with colorful flower patterns.",
  },
  {
    id: 22,
    name: "Green Patchwork Puffer Jacket",
    price: "₹ 390",
    image: "https://i.pinimg.com/564x/7e/89/a7/7e89a769faba3910416637e6f3158d39.jpg",
    description: "A stylish and warm jacket made from patchwork of green fabrics.",
  },
  {
    id: 23,
    name: "Quilted Vest",
    price: "₹ 990",
    image: "https://i.pinimg.com/564x/3a/e0/1c/3ae01cab43074db82e98fa6f641c5129.jpg",
    description: "A store featuring handmade clothing and accessories.",
  },
  {
    id: 24,
    name: "Jacket",
    price: "₹ 500",
    image: "https://i.pinimg.com/564x/8d/0d/50/8d0d50278f4742efc194806816387097.jpg",
    description: "An outer garment typically worn for warmth, protection, or style.",
  },
];

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Retrieve cart from local storage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    // Fetch products based on cart IDs
    const fetchedProducts = products.filter((product) => storedCart.includes(product.id));
    setCart(fetchedProducts);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);

    // Update local storage
    const cartFromStorage = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedStorageCart = cartFromStorage.filter((productId) => productId !== id);
    localStorage.setItem('cart', JSON.stringify(updatedStorageCart));
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cart.length > 0 ? (
        <div className="product-grid">
          {cart.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="productImage"
                  loading="lazy"
                />
              </div>
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <div className="button-group">
                  <button 
                    className="buy-button"
                    onClick={() => window.location.href = 'https://buy.stripe.com/test_14k16iaLDfVW2uk28b'}
                  >
                    BUY
                  </button>
                   {/* <button
                    onClick={() => removeFromCart(product.id)}
                    className="remove-button"
                  >
                    REMOVE
                  </button>  */}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;