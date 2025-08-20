# E-commerce Platform

A full-stack e-commerce web application with separate admin and user frontends, built using the MERN stack. This project demonstrates modern web development practices, including authentication, product management, order processing, and responsive UI.

## 🚀 Features

### User Frontend
- **User Authentication**: Registration and login with JWT tokens
- **Product Catalog**: Browse and search through products
- **Shopping Cart**: Add, update, and remove items from cart
- **Order Management**: Place orders with multiple payment methods
- **Order Tracking**: View order history and status updates
- **Responsive Design**: Mobile-friendly interface

### Admin Panel
- **Admin Authentication**: Secure admin login system
- **Product Management**: Complete CRUD operations for products
- **Image Upload**: Multi-image product uploads via Cloudinary
- **Order Management**: View and update order statuses
- **Dashboard**: Overview of business metrics

### Backend API
- **RESTful Architecture**: Well-structured API endpoints
- **Authentication & Authorization**: JWT-based security
- **Data Validation**: Input validation and sanitization
- **File Upload**: Cloudinary integration for image management
- **Payment Integration**: Multiple payment gateways support

## 🛠️ Technology Stack

### Frontend Technologies
- **React.js** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **React Toastify** - Toast notifications

### Backend Technologies
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT (jsonwebtoken)** - Authentication tokens
- **bcrypt** - Password hashing
- **Multer** - File upload middleware
- **Cloudinary** - Cloud-based image management
- **Stripe** - Payment processing
- **Razorpay** - Payment gateway for India
- **Validator** - Data validation library
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **Nodemon** - Development server auto-restart

## 📁 Project Structure

```
E-commerce/
├── admin/                  # Admin Dashboard
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Admin pages (Add, List, Orders)
│   │   └── assets/        # Static assets
│   ├── package.json
│   └── vite.config.js
│
├── frontend/              # User Interface
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/        # User pages
│   │   ├── context/      # React context
│   │   └── assets/       # Images and static files
│   ├── package.json
│   └── vite.config.js
│
└── backend/               # Express.js API Server
    ├── config/           # Database and service configurations
    ├── controllers/      # Business logic
    ├── middleware/       # Authentication and file upload
    ├── models/          # Database schemas
    ├── routes/          # API endpoints
    ├── package.json
    └── server.js
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **MongoDB Atlas** account or local MongoDB installation
- **Cloudinary** account for image storage
- **Stripe** account for payment processing
- **Razorpay** account (optional, for Indian market)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Thanh14013/E-commerce.git
   cd E-commerce
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Install admin dependencies:**
   ```bash
   cd ../admin
   npm install
   ```

### Environment Configuration

Create a `.env` file in the `backend/` directory with the following variables:

```env
# Server Configuration
PORT=5000

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce

# JWT Secret
JWT_SECRET=your_super_secure_jwt_secret_key

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

# Admin Credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password

# Payment Gateways
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### Running the Application

1. **Start the backend server:**
   ```bash
   cd backend
   npm run server
   # Server will run on http://localhost:5000
   ```

2. **Start the user frontend:**
   ```bash
   cd frontend
   npm run dev
   # Frontend will run on http://localhost:5173
   ```

3. **Start the admin panel:**
   ```bash
   cd admin
   npm run dev
   # Admin panel will run on http://localhost:5174
   ```

### Build for Production

```bash
# Build frontend
cd frontend
npm run build

# Build admin panel
cd ../admin
npm run build

# Start backend in production mode
cd ../backend
npm start
```

## 📊 API Endpoints

### User Routes
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/admin` - Admin login

### Product Routes
- `GET /api/product/list` - Get all products
- `POST /api/product/single` - Get single product
- `POST /api/product/add` - Add new product (Admin)
- `POST /api/product/remove` - Remove product (Admin)

### Cart Routes
- `POST /api/cart/get` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/update` - Update cart item

### Order Routes
- `POST /api/order/list` - Get all orders (Admin)
- `POST /api/order/userorders` - Get user orders
- `POST /api/order/place` - Place new order
- `POST /api/order/status` - Update order status (Admin)

## 🔐 Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Server-side validation using validator
- **CORS Protection**: Configured cross-origin resource sharing
- **Admin Authorization**: Protected admin routes
- **Environment Variables**: Sensitive data stored securely

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Toast Notifications**: User feedback with React Toastify
- **Loading States**: Enhanced user experience
- **Form Validation**: Client-side validation
- **Image Optimization**: Cloudinary integration for fast loading
- **Clean Interface**: Modern and intuitive design

## 🚀 Deployment

### Backend Deployment (Heroku/Railway/Render)
1. Set up environment variables on your hosting platform
2. Deploy the backend code
3. Ensure MongoDB Atlas is accessible

### Frontend Deployment (Vercel/Netlify)
1. Build the frontend applications
2. Deploy static files
3. Configure API endpoints to point to your backend

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Thanh14013**
- GitHub: [@Thanh14013](https://github.com/Thanh14013)

## 🙏 Acknowledgments

- React.js team for the amazing framework
- MongoDB for the flexible database solution
- Cloudinary for image management services
- Stripe and Razorpay for payment processing
- All contributors and the open-source community

---

⭐ **Star this repository if you found it helpful!**
