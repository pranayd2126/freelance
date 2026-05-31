# StudentBid Portal

**StudentBid Portal** is a modern freelance bidding marketplace that bridges the gap between talented college students and local businesses. The platform enables clients to post projects, students to compete through bidding, and both parties to collaborate securely through escrow payments, real-time communication, and comprehensive profile management.

Built with a scalable MERN architecture, StudentBid delivers a seamless experience for project hiring, execution, and payment management.

---

# Overview

StudentBid empowers:

* **Students** to showcase their skills, build portfolios, earn income, and gain real-world experience.
* **Businesses & Clients** to discover talented local students, post projects, compare proposals, and manage work efficiently.

The platform includes secure authentication, project bidding workflows, integrated payments, real-time chat, notifications, and role-based dashboards.

---

# Technology Stack

## Frontend

| Technology          | Purpose                       |
| ------------------- | ----------------------------- |
| React 19            | User Interface Development    |
| Vite 6              | Fast Development & Build Tool |
| JavaScript (ES6+)   | Application Logic             |
| Tailwind CSS v4     | Utility-First Styling         |
| Vanilla CSS         | Custom Component Styling      |
| Redux Toolkit       | Global State Management       |
| React Router DOM v7 | Client-Side Routing           |
| Axios               | API Communication             |
| Socket.io Client    | Real-Time Communication       |

---

## Backend

| Technology         | Purpose                  |
| ------------------ | ------------------------ |
| Node.js            | Server Runtime           |
| Express.js         | REST API Framework       |
| MongoDB            | NoSQL Database           |
| Mongoose           | ODM for MongoDB          |
| JWT Authentication | Secure User Sessions     |
| HTTP-Only Cookies  | Session Security         |
| Socket.io          | Real-Time Messaging      |
| Razorpay           | Payment Gateway          |
| Cloudinary         | Media Storage & Delivery |

---

# Project Structure

```text
StudentBid/
│
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── razorpay.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── projectController.js
│   │   ├── bidController.js
│   │   └── paymentController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── roleMiddleware.js
│   │   └── validationMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Profile.js
│   │   ├── Project.js
│   │   ├── Bid.js
│   │   └── Payment.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── bidRoutes.js
│   │   └── paymentRoutes.js
│   │
│   ├── utils/
│   │   ├── cloudinary.js
│   │   ├── tokenGenerator.js
│   │   └── notificationService.js
│   │
│   ├── server.js
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── context/
    │   ├── hooks/
    │   ├── layouts/
    │   ├── pages/
    │   ├── redux/
    │   ├── services/
    │   └── utils/
    │
    └── package.json
```

---

# Environment Configuration

Create a `.env` file inside the **backend** directory.

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
COOKIE_EXPIRE=7

# Frontend URL
CLIENT_URL=http://localhost:5173

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Razorpay Configuration
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

---

# Installation Guide

## 1. Clone Repository

```bash
git clone https://github.com/your-username/studentbid.git
cd studentbid
```

---

## 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

# Running the Application

## Start Backend Server

```bash
cd backend
npm run dev
```

Backend URL:

```text
http://localhost:5000
```

---

## Start Frontend Server

```bash
cd frontend
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

# Core Features

## Authentication & Authorization

* Student and Client registration.
* JWT-based authentication.
* Secure HTTP-only cookie sessions.
* Protected routes.
* Role-based access control.
* Persistent login sessions.

---

## Project Management

Clients can:

* Create project listings.
* Define project budgets and requirements.
* Review incoming proposals.
* Assign projects to selected students.
* Track project progress.

Students can:

* Browse available projects.
* Submit competitive bids.
* Add cover letters and proposals.
* Track bid status.

---

## Freelance Bidding System

Project workflow:

```text
Project Created
       ↓
Students Submit Bids
       ↓
Client Reviews Proposals
       ↓
Bid Accepted
       ↓
Project Assigned
       ↓
Work Completion
       ↓
Payment Released
```

---

## Secure Escrow Payments

Integrated Razorpay payment workflow:

1. Client accepts a bid.
2. Advance payment is deposited.
3. Funds remain in escrow.
4. Student completes project milestones.
5. Client approves work.
6. Payment is released to the student.

Features:

* Razorpay Checkout Integration
* Payment Verification
* Escrow Tracking
* Transaction History
* Earnings Dashboard

---

## Real-Time Messaging

Socket.io powers:

* One-to-one project chat
* Instant messaging
* Typing indicators
* Online user status
* Real-time notifications
* Assignment updates

---

## Student Profiles

Students can maintain:

* Professional Bio
* Skills & Expertise
* Resume Upload
* Portfolio Showcase
* Project History
* Ratings & Reviews

---

## Client Profiles

Clients can manage:

* Business Information
* Project Listings
* Spending History
* Active Contracts
* Freelancer Reviews

---

# Application Workflow

## Student Journey

```text
Register
   ↓
Create Profile
   ↓
Browse Projects
   ↓
Submit Bid
   ↓
Get Selected
   ↓
Complete Work
   ↓
Receive Payment
```

---

## Client Journey

```text
Register
   ↓
Create Project
   ↓
Receive Bids
   ↓
Hire Student
   ↓
Fund Escrow
   ↓
Review Work
   ↓
Release Payment
```

---

# Security Features

* JWT Authentication
* HTTP-Only Cookies
* Protected API Routes
* Role-Based Authorization
* Payment Signature Verification
* Secure Password Hashing
* Environment Variable Protection
* Input Validation & Sanitization

---

# Future Enhancements

* AI-Powered Bid Recommendations
* Project Milestone Management
* Video Interview Scheduling
* Student Skill Verification
* In-App Video Meetings
* Multi-Language Support
* Mobile Application
* Advanced Analytics Dashboard

---

# Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# License

This project is licensed under the MIT License.

---

# Developed For

**StudentBid Portal** aims to create opportunities for students to gain practical experience while helping businesses connect with local emerging talent through a trusted freelance ecosystem.
