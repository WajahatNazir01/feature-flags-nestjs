# 🚀 Nest Feature Flags

> A production-ready, real-time, multi-tenant feature flagging framework for NestJS applications.

Nest Feature Flags enables engineering teams to safely enable, disable, or gradually roll out application features **without redeploying code**. Built with **NestJS**, **PostgreSQL**, **Socket.IO**, and **React**, it provides centralized feature management with real-time synchronization across distributed services.

Designed for SaaS products and enterprise applications, the framework supports isolated tenant environments, allowing each customer to have independent feature configurations for Development and Production.

---

# ✨ Features

* 🔄 Real-time feature updates using Socket.IO
* 🏢 Multi-tenant architecture
* 🌍 Environment isolation (Development / Production)
* ⚡ Instant feature propagation without page refresh
* 🛡️ Strict DTO validation using NestJS
* 📦 PostgreSQL persistence via Prisma ORM
* 🎛️ Modern React management dashboard
* 🔌 Simple JavaScript client SDK
* 🚀 No application redeployment required
* 📈 Scalable microservice-friendly architecture

---

# 🏗 Architecture

```
                     ┌────────────────────────┐
                     │   React Dashboard      │
                     │      Port 5173         │
                     └──────────┬─────────────┘
                                │ REST API
                                ▼
                     ┌────────────────────────┐
                     │   NestJS Core API      │
                     │      Port 3000         │
                     └──────────┬─────────────┘
                                │
                   PostgreSQL + Prisma ORM
                                │
                                ▼
                     ┌────────────────────────┐
                     │  Streaming Server      │
                     │ Socket.IO (3005)       │
                     └──────────┬─────────────┘
                                │
                                ▼
                     ┌────────────────────────┐
                     │ Client Gateway Proxy   │
                     │ API: 4000              │
                     │ UI : 5500              │
                     └──────────┬─────────────┘
                                │
                                ▼
                     Browser / Microservices
```

---

# 📦 Tech Stack

| Layer     | Technology           |
| --------- | -------------------- |
| Dashboard | React + Tailwind CSS |
| Backend   | NestJS               |
| ORM       | Prisma               |
| Database  | PostgreSQL           |
| Realtime  | Socket.IO            |
| Gateway   | Express.js           |
| Language  | TypeScript           |

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/yourusername/nest-feature-flags.git

cd nest-feature-flags
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Services

### Database API

```bash
cd db-api

npm install

npm run start:dev
```

Runs on:

```
http://localhost:3000
```

---

### Streaming Server

```bash
cd streaming-server

npm install

npm start
```

Runs on:

```
http://localhost:3005
```

---

### Dashboard

```bash
cd dashboard

npm install

npm run dev
```

Runs on

```
http://localhost:5173
```

---

### Client Gateway

```bash
cd client

npm install

npm start
```

Runs on

```
http://localhost:4000
```

---

# 🔍 Health Check

Verify the API is running:

```bash
curl http://localhost:3000/tenants
```

Expected response

```json
[
  {
    "id": "...",
    "name": "demosignup"
  }
]
```

Verify the Streaming Server is listening on **Port 3005**.

---

# 📖 Creating Your First Feature Flag

## 1. Create a Tenant

Open

```
http://localhost:5173
```

Register or select an existing tenant.

Example

```
demosignup
```

Copy the generated

```
Tenant ID (UUID)
```

---

## 2. Create a Feature Flag

Click **+ Add Feature**

Create

| Property    | Value                        |
| ----------- | ---------------------------- |
| Key         | bannerShowingEnabled         |
| Description | Banner visibility controller |

The dashboard automatically creates separate configurations for

* Development
* Production

---

## 3. Toggle a Feature

Example payload

```json
{
  "flagId": "********************************",
  "environmentId": "*****************",
  "environmentName": "Development",
  "isEnabled": true
}
```

Once updated

* PostgreSQL is updated
* Socket.IO emits `flagUpdated`
* Connected clients refresh instantly

No browser refresh is required.

---

# 💻 Client Integration

## Fetch Configuration

```javascript
async function syncFeatures() {
    const response = await fetch(
        "http://localhost:4000/api/config"
    );

    const config = await response.json();

    if (config.bannerShowingEnabled) {
        banner.classList.add("show");
    } else {
        banner.classList.remove("show");
    }
}
```

---

## Enable Real-Time Updates

```javascript
const socket = io("http://localhost:3005", {
    query: {
        tenantId: "<YOUR_TENANT_UUID>"
    }
});

socket.on("flagUpdated", () => {
    syncFeatures();
});
```

---

# ⚙️ Runtime Flow

```
User toggles flag
        │
        ▼
React Dashboard
        │
        ▼
NestJS API
        │
        ▼
PostgreSQL
        │
        ▼
Socket.IO Event
        │
        ▼
Connected Clients
        │
        ▼
UI Updates Instantly
```

---

# 📂 Project Structure

```
nest-feature-flags/

├── dashboard/
│   React Management Console
│
├── db-api/
│   NestJS API
│
├── streaming-server/
│   Socket.IO broker
│
├── client/
│   Example client application
│
├── prisma/
│   Database schema
│
└── README.md
```

---

# 🛠 Troubleshooting

### Feature immediately switches back

Usually caused by background polling finishing before the database transaction commits.

The dashboard prevents this using optimistic UI state locking until the server confirms the update.

---

### HTTP 400 Validation Error

Ensure all identifiers are valid UUID strings.

Example

```javascript
String(environmentId)
```

---

### Socket Events Not Received

Verify

* Streaming server is running
* Correct tenant ID is provided
* Port **3005** is reachable

---

# 🚀 Roadmap

* SDK for React
* SDK for Vue
* SDK for Angular
* Progressive Rollouts
* Percentage-based Feature Releases
* User Segmentation
* Role-based Flags
* Scheduled Feature Releases
* Audit Logs
* Feature Analytics
* Kubernetes Deployment
* Docker Compose Support
* Redis Event Bus
* OpenAPI SDK Generation

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

# 📄 License

MIT License
