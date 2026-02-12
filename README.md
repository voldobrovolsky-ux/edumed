# EduMed - Educational Management System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Comпrehensive educational management system for schools with journal, timetable, document management, and statistics.

## 🚀 Features (v0.1)

- **User Management**: Role-based access control (Admin, Teacher, Student, Parent)
- **School Journal**: Grade tracking, homework assignments
- **Timetable**: Class scheduling and lesson planning
- **Document Management**: School documents and file storage
- **Statistics**: Performance analytics and reports
- **Personal Dashboards**: Customized views for each role

## 🏗️ Architecture

### Tech Stack

**Backend:**
- Node.js with TypeScript
- Express/Fastify
- PostgreSQL
- Prisma ORM (optional)

**Frontend:**
- React/Next.js
- TypeScript
- Modern design system

**Infrastructure:**
- Docker & Docker Compose
- PostgreSQL 16

## 📁 Project Structure

```
edumed/
├── apps/
│   ├── api/          # Node.js backend
│   └── web/          # React frontend
├── docs/             # Architecture & design docs
├── db/               # Database schemas & seeds
└── docker-compose.yml
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- Docker & Docker Compose
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/voldobrovolsky-ux/edumed.git
cd edumed
```

2. Copy environment variables:
```bash
cp .env.example .env
```

3. Start services with Docker:
```bash
npm run docker:up
```

4. Install dependencies:
```bash
npm install
```

5. Run migrations:
```bash
npm run db:migrate
```

6. Seed database:
```bash
npm run db:seed
```

### Development

```bash
# Start both API and Web
npm run dev

# Start only API
npm run dev:api

# Start only Web
npm run dev:web
```

### Docker Commands

```bash
# Start containers
npm run docker:up

# Stop containers
npm run docker:down

# View logs
npm run docker:logs
```

## 📚 Documentation

Detailed documentation available in `/docs` directory:

- [Architecture Overview](docs/architecture/v0.1-overview.md)
- [Modules List](docs/architecture/modules-list.md)
- Block-specific designs in `/docs/blocks/`

## 🗄️ Database Schema

Core tables:
- `users`, `roles`, `user_roles`
- `schools`, `classes`, `subjects`, `courses`
- `students`, `parents`, `student_parents`
- `timetable_entries`, `marks`, `homeworks`
- `files`, `permissions`

See `/db/schema.sql` for complete schema.

## 🧪 Testing

```bash
npm test
```

## 🚢 Deployment

```bash
# Build for production
npm run build

# Build with Docker
docker-compose -f docker-compose.prod.yml up -d
```

## 📝 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

Contributions welcome! Please read CONTRIBUTING.md first.

## 📧 Contact

Project Link: [https://github.com/voldobrovolsky-ux/edumed](https://github.com/voldobrovolsky-ux/edumed)
