
const products = [
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

// Get cart from localStorage
function getCart() {
  const cart = localStorage.getItem("cart")
  return cart ? JSON.parse(cart) : []
}

// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart))
}

// Add product to cart
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

// Remove product from cart
function removeFromCart(productId) {
  let cart = getCart()
  cart = cart.filter((item) => item.id !== productId)
  saveCart(cart)
  updateCartCount()

  // Reload cart page if on cart page
  if (window.location.pathname.includes("cart.html")) {
    loadCart()
  }
}

// Load cart function
function loadCart() {
  const cart = getCart()
  const cartContainer = document.getElementById("cartContainer")
  cartContainer.innerHTML = "" // Clear existing content

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

// Update cart count in navbar
function updateCartCount() {
  const cart = getCart()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartCountElements = document.querySelectorAll("#cartCount")
  cartCountElements.forEach((element) => {
    element.textContent = totalItems
  })
}

// User Management Functions

// Get current user
function getCurrentUser() {
  const user = localStorage.getItem("currentUser")
  return user ? JSON.parse(user) : null
}

// Logout function
function logout() {
  localStorage.removeItem("currentUser")
  updateUserLink()
  window.location.href = "login.html"
}

// Update user link in navbar
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
