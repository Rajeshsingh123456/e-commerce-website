const products = [
  // ORIGINAL 12 PRODUCTS (id 1-12) - Images unchanged
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 2999,
    image: "/wireless-bluetooth-headphones.png",
    rating: 4.5,
    category: "electronics",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Comfortable design for all-day wear.",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 4999,
    image: "/smart-fitness-watch.png",
    rating: 4.3,
    category: "electronics",
    description:
      "Track your fitness goals with heart rate monitoring, GPS, and 50+ sport modes. Water resistant design.",
  },
  {
    id: 3,
    name: "Cotton Casual T-Shirt",
    price: 599,
    image: "cotton-casual-tshirt.png",
    rating: 4.0,
    category: "fashion",
    description: "100% premium cotton t-shirt. Comfortable fit for everyday wear. Available in multiple colors.",
  },
  {
    id: 4,
    name: "Denim Jeans",
    price: 1499,
    image: "/denim-jeans.png",
    rating: 4.2,
    category: "fashion",
    description: "Classic slim fit denim jeans with stretch fabric for maximum comfort. Durable construction.",
  },
  {
    id: 5,
    name: "LED Desk Lamp",
    price: 899,
    image: "/led-desk-lamp.png",
    rating: 4.4,
    category: "home",
    description:
      "Adjustable LED desk lamp with multiple brightness levels. Eye-friendly light for reading and working.",
  },
  {
    id: 6,
    name: "Ceramic Coffee Mug Set",
    price: 499,
    image: "/ceramic-coffee-mug-set.png",
    rating: 4.1,
    category: "home",
    description: "Set of 4 elegant ceramic coffee mugs. Microwave and dishwasher safe. Perfect for home or office.",
  },
  {
    id: 7,
    name: "Bestseller Novel Collection",
    price: 799,
    image: "/bestseller-novel-books.png",
    rating: 4.6,
    category: "books",
    description: "Collection of 3 bestselling novels from award-winning authors. Perfect for book lovers.",
  },
  {
    id: 8,
    name: "Wireless Gaming Mouse",
    price: 1999,
    image: "/wireless-gaming-mouse.png",
    rating: 4.5,
    category: "electronics",
    description: "High-precision gaming mouse with customizable RGB lighting and programmable buttons.",
  },
  {
    id: 9,
    name: "Sports Running Shoes",
    price: 2499,
    image: "/sports-running-shoes.png",
    rating: 4.3,
    category: "fashion",
    description:
      "Lightweight running shoes with superior cushioning and breathable mesh upper. Perfect for daily workouts.",
  },
  {
    id: 10,
    name: "Decorative Wall Clock",
    price: 1299,
    image: "/decorative-wall-clock.png",
    rating: 4.2,
    category: "home",
    description: "Modern decorative wall clock with silent movement. Adds elegance to any room.",
  },
  {
    id: 11,
    name: "Self-Help Book Bundle",
    price: 699,
    image: "/self-help-books.png",
    rating: 4.4,
    category: "books",
    description: "Bundle of 3 inspiring self-help books to boost productivity and personal growth.",
  },
  {
    id: 12,
    name: "Portable Power Bank",
    price: 1499,
    image: "/portable-power-bank.png",
    rating: 4.5,
    category: "electronics",
    description: "20000mAh portable power bank with fast charging support. Charge multiple devices simultaneously.",
  },

  // ELECTRONICS (id 13-22)
  {
    id: 13,
    name: "Wireless Earbuds Pro",
    price: 3499,
    image: "/wireless-earbuds-white-case.jpg",
    rating: 4.6,
    category: "electronics",
    description: "Premium true wireless earbuds with active noise cancellation and 24-hour battery life.",
  },
  {
    id: 14,
    name: "Smartphone Gimbal Stabilizer",
    price: 5999,
    image: "/smartphone-gimbal-stabilizer-black.jpg",
    rating: 4.4,
    category: "electronics",
    description: "3-axis gimbal stabilizer for smooth video recording. Compatible with all smartphones.",
  },
  {
    id: 15,
    name: "Mechanical Gaming Keyboard",
    price: 4499,
    image: "/mechanical-gaming-keyboard-rgb-lights.jpg",
    rating: 4.7,
    category: "electronics",
    description: "RGB mechanical keyboard with blue switches and customizable backlighting.",
  },
  {
    id: 16,
    name: "4K Action Camera",
    price: 8999,
    image: "/4k-action-camera-waterproof-black.jpg",
    rating: 4.5,
    category: "electronics",
    description: "Waterproof 4K action camera with image stabilization and wide-angle lens.",
  },
  {
    id: 17,
    name: "Bluetooth Speaker Portable",
    price: 2499,
    image: "/portable-bluetooth-speaker-black-cylinder.jpg",
    rating: 4.3,
    category: "electronics",
    description: "Portable waterproof Bluetooth speaker with 360-degree sound and 12-hour playtime.",
  },
  {
    id: 18,
    name: "USB-C Hub Multiport",
    price: 1999,
    image: "/usb-c-hub-multiport-adapter-silver.jpg",
    rating: 4.4,
    category: "electronics",
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and PD charging.",
  },
  {
    id: 19,
    name: "Smart Home Speaker",
    price: 6999,
    image: "/smart-home-speaker-voice-assistant.jpg",
    rating: 4.5,
    category: "electronics",
    description: "Voice-controlled smart speaker with premium sound and home automation features.",
  },
  {
    id: 20,
    name: "Wireless Charging Pad",
    price: 999,
    image: "/wireless-charging-pad-black-circular.jpg",
    rating: 4.2,
    category: "electronics",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
  },
  {
    id: 21,
    name: "Digital Drawing Tablet",
    price: 7999,
    image: "/digital-drawing-tablet-with-stylus-pen.jpg",
    rating: 4.6,
    category: "electronics",
    description: "Professional drawing tablet with pressure-sensitive stylus and large active area.",
  },
  {
    id: 22,
    name: "Webcam HD 1080p",
    price: 2499,
    image: "/hd-webcam-1080p-computer-camera.jpg",
    rating: 4.4,
    category: "electronics",
    description: "Full HD webcam with built-in microphone and auto light correction.",
  },

  // FASHION (id 23-34)
  {
    id: 23,
    name: "Formal Shirt White",
    price: 1299,
    image: "/white-formal-shirt-men-cotton.jpg",
    rating: 4.4,
    category: "fashion",
    description: "Premium cotton formal shirt perfect for office and special occasions.",
  },
  {
    id: 24,
    name: "Leather Belt Brown",
    price: 799,
    image: "/brown-leather-belt-classic-buckle.jpg",
    rating: 4.3,
    category: "fashion",
    description: "Genuine leather belt with classic buckle design. Adjustable size.",
  },
  {
    id: 25,
    name: "Sunglasses Aviator",
    price: 1499,
    image: "/aviator-sunglasses-gold-frame.jpg",
    rating: 4.5,
    category: "fashion",
    description: "Classic aviator sunglasses with UV protection and polarized lenses.",
  },
  {
    id: 26,
    name: "Winter Jacket",
    price: 3999,
    image: "/winter-puffer-jacket-black-warm.jpg",
    rating: 4.6,
    category: "fashion",
    description: "Warm puffer jacket with water-resistant outer layer. Perfect for cold weather.",
  },
  {
    id: 27,
    name: "Canvas Sneakers",
    price: 1299,
    image: "/canvas-sneakers-white-casual-shoes.jpg",
    rating: 4.2,
    category: "fashion",
    description: "Classic canvas sneakers with rubber sole. Comfortable casual footwear.",
  },
  {
    id: 28,
    name: "Polo T-Shirt",
    price: 899,
    image: "/polo-t-shirt-navy-blue-collar.jpg",
    rating: 4.1,
    category: "fashion",
    description: "Premium polo t-shirt with collar. Perfect for semi-casual occasions.",
  },
  {
    id: 29,
    name: "Chino Pants",
    price: 1799,
    image: "/chino-pants-beige-men-casual.jpg",
    rating: 4.3,
    category: "fashion",
    description: "Comfortable chino pants with stretch fabric. Ideal for office and casual wear.",
  },
  {
    id: 30,
    name: "Hooded Sweatshirt",
    price: 1499,
    image: "/hooded-sweatshirt-grey-fleece-hoodie.jpg",
    rating: 4.4,
    category: "fashion",
    description: "Soft fleece hoodie with front pocket. Great for layering.",
  },
  {
    id: 31,
    name: "Formal Trousers",
    price: 1999,
    image: "/formal-trousers.jpg",
    rating: 4.2,
    category: "fashion",
    description: "Tailored formal trousers for professional settings. Wrinkle-resistant fabric.",
  },
  {
    id: 32,
    name: "Leather Wallet",
    price: 999,
    image: "/leather-wallet.jpg",
    rating: 4.5,
    category: "fashion",
    description: "Genuine leather bifold wallet with multiple card slots and coin pocket.",
  },
  {
    id: 33,
    name: "Sports Cap",
    price: 499,
    image: "/sports-cap.jpg",
    rating: 4.0,
    category: "fashion",
    description: "Adjustable sports cap with breathable mesh back. UV protection.",
  },
  {
    id: 34,
    name: "Track Pants",
    price: 999,
    image: "/track-pants.jpg",
    rating: 4.1,
    category: "fashion",
    description: "Comfortable track pants with elastic waistband. Perfect for workouts.",
  },

  // HOME & LIVING (id 35-46)
  {
    id: 35,
    name: "Indoor Plant Pot Set",
    price: 799,
    image: "/indoor-plant-pot-set.jpg",
    rating: 4.3,
    category: "home",
    description: "Set of 3 ceramic plant pots in different sizes. Perfect for succulents and small plants.",
  },
  {
    id: 36,
    name: "Throw Pillow Covers",
    price: 599,
    image: "/throw-pillow-covers.jpg",
    rating: 4.2,
    category: "home",
    description: "Set of 4 decorative pillow covers with modern patterns. Machine washable.",
  },
  {
    id: 37,
    name: "Scented Candle Set",
    price: 699,
    image: "/scented-candle-set.jpg",
    rating: 4.4,
    category: "home",
    description: "Set of 3 aromatherapy candles with calming scents. Long-lasting burn time.",
  },
  {
    id: 38,
    name: "Kitchen Knife Set",
    price: 1999,
    image: "/kitchen-knife-set.jpg",
    rating: 4.6,
    category: "home",
    description: "Professional 5-piece knife set with stainless steel blades and ergonomic handles.",
  },
  {
    id: 39,
    name: "Bedside Table Lamp",
    price: 1299,
    image: "/bedside-table-lamp.jpg",
    rating: 4.3,
    category: "home",
    description: "Elegant bedside lamp with fabric shade and warm LED bulb included.",
  },
  {
    id: 40,
    name: "Storage Organizer Boxes",
    price: 899,
    image: "/storage-organizer-boxes.jpg",
    rating: 4.1,
    category: "home",
    description: "Set of 4 foldable storage boxes. Perfect for closet and shelf organization.",
  },
  {
    id: 41,
    name: "Bathroom Towel Set",
    price: 1499,
    image: "/bathroom-towel-set.jpg",
    rating: 4.4,
    category: "home",
    description: "Premium cotton towel set including bath, hand, and face towels. Ultra-absorbent.",
  },
  {
    id: 42,
    name: "Wall Art Canvas",
    price: 1799,
    image: "/wall-art-canvas.jpg",
    rating: 4.5,
    category: "home",
    description: "Modern abstract canvas art ready to hang. Adds personality to any room.",
  },
  {
    id: 43,
    name: "Electric Kettle",
    price: 1299,
    image: "/electric-kettle.jpg",
    rating: 4.4,
    category: "home",
    description: "Fast-boiling electric kettle with auto shut-off and cool-touch handle.",
  },
  {
    id: 44,
    name: "Glass Storage Jars",
    price: 799,
    image: "/glass-storage-jars.jpg",
    rating: 4.3,
    category: "home",
    description: "Set of 6 airtight glass jars for kitchen storage. Various sizes included.",
  },
  {
    id: 45,
    name: "Curtains Blackout",
    price: 1999,
    image: "/curtains-blackout.jpg",
    rating: 4.5,
    category: "home",
    description: "Light-blocking blackout curtains for better sleep. Thermal insulated.",
  },
  {
    id: 46,
    name: "Digital Drawing Tablet with Stylus Pen",
    price: 2499,
    image: "/digital-drawing-tablet-stylus.jpg",
    rating: 4.6,
    category: "home",
    description: "High-precision digital drawing tablet with a pressure-sensitive stylus, perfect for artists, designers, and students. Smooth surface and accurate pen response make sketching, writing, and editing effortless.",
  },

  // BOOKS (id 47-62)
  {
    id: 47,
    name: "Programming Guide Python",
    price: 599,
    image: "/programming-guide-python.jpg",
    rating: 4.5,
    category: "books",
    description: "Comprehensive Python programming guide for beginners to advanced learners.",
  },
  {
    id: 48,
    name: "Cookbook Indian Recipes",
    price: 499,
    image: "/cookbook-indian-recipes.jpg",
    rating: 4.4,
    category: "books",
    description: "Traditional and modern Indian recipes with step-by-step instructions.",
  },
  {
    id: 49,
    name: "Business Strategy Book",
    price: 699,
    image: "/business-strategy-book.jpg",
    rating: 4.3,
    category: "books",
    description: "Learn business strategies from successful entrepreneurs worldwide.",
  },
  {
    id: 50,
    name: "Children Story Book Set",
    price: 499,
    image: "/children-story-book.jpg",
    rating: 4.6,
    category: "books",
    description: "Set of 5 illustrated story books for children aged 5-10 years.",
  },
  {
    id: 51,
    name: "Science Fiction Anthology",
    price: 799,
    image: "/science-fiction-anthology.jpg",
    rating: 4.5,
    category: "books",
    description: "Collection of classic science fiction stories from legendary authors.",
  },
  {
    id: 52,
    name: "History of India",
    price: 599,
    image: "/history-of-india.jpg",
    rating: 4.4,
    category: "books",
    description: "Comprehensive history book covering ancient to modern India.",
  },
  {
    id: 53,
    name: "UrbanShield Anti-Theft Laptop Backpack",
    price: 999,
    image: "/urban-backpack-black-laptop.jpg",
    rating: 4.3,
    category: "books",
    description: "The ultimate companion for commuters and students. This sleek, water-resistant black backpack features a dedicated padded compartment that fits up to a 15.6-inch laptop. With multiple organized pockets, ergonomic shoulder straps, and a minimalist urban design, it combines style with heavy-duty durability for your daily hustle.",
  },
  {
    id: 54,
    name: "Photography Masterclass",
    price: 899,
    image: "/photography-masterclass.jpg",
    rating: 4.6,
    category: "books",
    description: "Learn professional photography techniques from award-winning photographers.",
  },
  {
    id: 55,
    name: "Financial Planning Guide",
    price: 549,
    image: "/financial-planning-guide.jpg",
    rating: 4.3,
    category: "books",
    description: "Expert advice on personal finance, investments, and wealth building.",
  },
  {
    id: 56,
    name: "Mystery Thriller Collection",
    price: 749,
    image: "/mystery-thriller-collection.jpg",
    rating: 4.5,
    category: "books",
    description: "Collection of 3 gripping mystery thrillers that will keep you hooked.",
  },
  {
    id: 57,
    name: "ZenGrip Premium Anti-Slip Yoga Mat",
    price: 649,
    image: "/yoga-mat-premium.jpg",
    rating: 4.4,
    category: "home",
    description: "Elevate your fitness routine with this premium, high-density yoga mat designed for maximum comfort and stability. It features a specialized anti-slip ribbed texture for a superior grip and extra cushioning to protect your joints during intense sessions.",
  },
  {
    id: 58,
    name: "UltraStream 4K Android Smart TV Box",
    price: 1999,
    image: "/android-smart-tv-box-streaming.jpg",
    rating: 4.5,
    category: "electronics",
    description: "Elevate your fitness routine with the ZenGrip Premium Yoga Mat. Engineered with high-density cushioning, it provides superior support for your joints and knees during intense workouts. The anti-skid ribbed texture ensures a firm grip on any surface, while the moisture-resistant material makes it durable and easy to clean after every session.",
  },
  {
    id: 59,
    name: "Gaming headset",
    price: 699,
    image: "/gaming-headset-7-1-surround.jpg",
    rating: 4.4,
    category: "electronics",
    description: "Achieve perfect balance with this premium purple yoga mat. Designed with high-density foam and an anti-slip ribbed surface, it provides superior cushioning for your joints and excellent stability for all poses. Durable, lightweight, and easy to clean, it’s the ideal choice for home workouts or studio sessions.",
  },
  {
    id: 60,
    name: "Romantic Novel Set",
    price: 599,
    image: "/romantic-novel.jpg",
    rating: 4.3,
    category: "books",
    description: "Set of 3 heartwarming romantic novels by bestselling authors.",
  },
  {
    id: 61,
    name: "Travel Guide India",
    price: 499,
    image: "/travel-guide-india.jpg",
    rating: 4.4,
    category: "books",
    description: "Comprehensive travel guide covering top destinations across India.",
  },
  {
    id: 62,
    name: "Motivational Quotes Book",
    price: 399,
    image: "/motivational-quotes-book.jpg",
    rating: 4.2,
    category: "books",
    description: "Collection of inspiring quotes from leaders, thinkers, and achievers.",
  },
]

function getProducts() {
  return products
}

// Create product card HTML
function createProductCard(product) {
  return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <span class="stars">${"⭐".repeat(Math.floor(product.rating))}</span>
                    <span class="rating-text">${product.rating} / 5</span>
                </div>
                <div class="product-price">₹${product.price.toLocaleString()}</div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="view-details" data-id="${product.id}">View</button>
                </div>
            </div>
        </div>
    `
}

// Attach event listeners to product cards
function attachProductCardListeners() {
  // Add to cart buttons
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation()
      const productId = Number.parseInt(this.dataset.id)
      addToCart(productId)
      alert("Product added to cart!")
    })
  })

  // View details buttons
  document.querySelectorAll(".view-details").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation()
      const productId = Number.parseInt(this.dataset.id)
      window.location.href = `product-detail.html?id=${productId}`
    })
  })

  // Make entire card clickable
  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", function (e) {
      if (!e.target.classList.contains("add-to-cart") && !e.target.classList.contains("view-details")) {
        const productId = Number.parseInt(this.querySelector(".add-to-cart").dataset.id)
        window.location.href = `product-detail.html?id=${productId}`
      }
    })
  })
}

// Cart Management Functions
function getCart() {
  const cart = localStorage.getItem("cart")
  return cart ? JSON.parse(cart) : []
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart))
}

function addToCart(productId) {
  const cart = getCart()
  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({ id: productId, quantity: 1 })
  }

  saveCart(cart)
  updateCartCount()
}

function removeFromCart(productId) {
  let cart = getCart()
  cart = cart.filter((item) => item.id !== productId)
  saveCart(cart)
  updateCartCount()

  if (window.location.pathname.includes("cart.html")) {
    loadCart()
  }
}

function loadCart() {
  const cart = getCart()
  const cartContainer = document.getElementById("cartContainer")
  cartContainer.innerHTML = ""

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id)
    const cartItemHTML = `
            <div class="cart-item">
                <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h3 class="cart-item-name">${product.name}</h3>
                    <div class="cart-item-price">₹${product.price.toLocaleString()}</div>
                    <div class="cart-item-quantity">Quantity: ${item.quantity}</div>
                    <button class="remove-from-cart" data-id="${product.id}">Remove</button>
                </div>
            </div>
        `
    cartContainer.innerHTML += cartItemHTML
  })
}

function updateCartCount() {
  const cart = getCart()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartCountElements = document.querySelectorAll("#cartCount")
  cartCountElements.forEach((element) => {
    element.textContent = totalItems
  })
}

// User Management Functions
function getCurrentUser() {
  const user = localStorage.getItem("currentUser")
  return user ? JSON.parse(user) : null
}

function logout() {
  localStorage.removeItem("currentUser")
  updateUserLink()
  window.location.href = "login.html"
}

function updateUserLink() {
  const user = getCurrentUser()
  const userLinkElements = document.querySelectorAll("#userLink")

  userLinkElements.forEach((element) => {
    if (user) {
      element.textContent = user.name
      element.href = "#"
      element.addEventListener("click", (e) => {
        e.preventDefault()
        if (confirm("Do you want to logout?")) {
          logout()
        }
      })
    } else {
      element.textContent = "Login"
      element.href = "login.html"
    }
  })
}

// Search functionality
function initSearch() {
  const searchInput = document.getElementById("searchInput")
  const searchBtn = document.getElementById("searchBtn")

  if (searchBtn) {
    searchBtn.addEventListener("click", performSearch)
  }

  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        performSearch()
      }
    })
  }
}

function performSearch() {
  const searchInput = document.getElementById("searchInput")
  const searchTerm = searchInput.value.toLowerCase().trim()

  if (searchTerm) {
    window.location.href = `products.html?search=${encodeURIComponent(searchTerm)}`
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount()
  updateUserLink()
  initSearch()
})

// HERO IMAGE SLIDER

const heroSlides = document.querySelectorAll(".slide");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

let slideIndex = 0;

// show slide
function updateSlide() {

  for (let i = 0; i < heroSlides.length; i++) {
    heroSlides[i].classList.remove("active");
  }

  heroSlides[slideIndex].classList.add("active");
}

// next button
if (btnNext) {
  btnNext.addEventListener("click", function () {

    slideIndex = slideIndex + 1;

    if (slideIndex === heroSlides.length) {
      slideIndex = 0;
    }

    updateSlide();
  });
}

// prev button
if (btnPrev) {
  btnPrev.addEventListener("click", function () {

    slideIndex = slideIndex - 1;

    if (slideIndex < 0) {
      slideIndex = heroSlides.length - 1;
    }

    updateSlide();
  });
}

// auto slide every 5 sec
function autoSlide() {

  slideIndex++;

  if (slideIndex >= heroSlides.length) {
    slideIndex = 0;
  }

  updateSlide();
}

setInterval(autoSlide, 5000);