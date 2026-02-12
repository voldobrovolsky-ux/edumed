# EduMed Modules List

## Core Modules

### 1. Authentication Module (`auth`)
**Purpose**: User authentication and session management

**Key Features**:
- User registration
- Login/logout
- JWT token generation and validation
- Password reset
- Token refresh

**API Endpoints**:
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/auth/refresh`
- `POST /api/auth/reset-password`

---

### 2. Users Module (`users`)
**Purpose**: User profile and account management

**Key Features**:
- User CRUD operations
- Profile updates
- User search and filtering
- Role assignment

**API Endpoints**:
- `GET /api/users`
- `GET /api/users/:id`
- `POST /api/users`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`

---

### 3. Roles & Permissions Module (`roles`, `permissions`)
**Purpose**: Role-based access control system

**Key Features**:
- Role management
- Permission assignment
- Access control checks

**Roles**:
- Admin: Full system access
- Teacher: Class and journal management
- Student: View grades and schedule
- Parent: View child's information

**API Endpoints**:
- `GET /api/roles`
- `POST /api/roles`
- `GET /api/permissions`
- `POST /api/roles/:id/permissions`

---

### 4. School Module (`school`)
**Purpose**: School information management

**Key Features**:
- School profile
- Academic year management
- School settings

**API Endpoints**:
- `GET /api/school`
- `PUT /api/school`
- `GET /api/school/academic-years`

---

### 5. Classes Module (`classes`)
**Purpose**: Class/grade management

**Key Features**:
- Class CRUD
- Student enrollment
- Class teacher assignment

**API Endpoints**:
- `GET /api/classes`
- `GET /api/classes/:id`
- `POST /api/classes`
- `PUT /api/classes/:id`
- `POST /api/classes/:id/students`

---

### 6. Subjects Module (`subjects`)
**Purpose**: Subject/course management

**Key Features**:
- Subject CRUD
- Subject categories
- Curriculum management

**API Endpoints**:
- `GET /api/subjects`
- `GET /api/subjects/:id`
- `POST /api/subjects`
- `PUT /api/subjects/:id`

---

### 7. Timetable Module (`timetable`)
**Purpose**: Schedule and lesson planning

**Key Features**:
- Timetable creation
- Lesson scheduling
- Room assignment
- Conflict detection
- Schedule export

**API Endpoints**:
- `GET /api/timetable`
- `GET /api/timetable/class/:classId`
- `GET /api/timetable/teacher/:teacherId`
- `POST /api/timetable/entries`
- `PUT /api/timetable/entries/:id`
- `DELETE /api/timetable/entries/:id`

---

### 8. Journal Module (`journal`)
**Purpose**: Grade book and attendance tracking

**Key Features**:
- Grade entry and management
- Attendance recording
- Homework assignments
- Comments and notes
- Grade calculations

**API Endpoints**:
- `GET /api/journal/class/:classId`
- `GET /api/journal/student/:studentId`
- `POST /api/journal/marks`
- `PUT /api/journal/marks/:id`
- `POST /api/journal/homework`
- `POST /api/journal/attendance`

---

### 9. Files Module (`files`)
**Purpose**: Document and file management

**Key Features**:
- File upload
- File categorization
- Access control
- Storage management (local/S3/Firebase)

**API Endpoints**:
- `POST /api/files/upload`
- `GET /api/files`
- `GET /api/files/:id`
- `DELETE /api/files/:id`
- `GET /api/files/:id/download`

---

### 10. Statistics Module (`stats`)
**Purpose**: Analytics and reporting

**Key Features**:
- Student performance reports
- Class statistics
- Attendance reports
- Subject-wise analysis
- Export to PDF/Excel

**API Endpoints**:
- `GET /api/stats/student/:id`
- `GET /api/stats/class/:id`
- `GET /api/stats/subject/:id`
- `GET /api/stats/attendance`
- `POST /api/stats/export`

---

### 11. Chat Module (Future) (`chat`)
**Purpose**: Real-time messaging

**Status**: Placeholder for future implementation

**Planned Features**:
- Teacher-student messaging
- Teacher-parent messaging
- Group chats
- File sharing

---

## Module Dependencies

```
auth
 ├─ users
 │   ├─ roles
 │   └─ permissions
 │
school
 ├─ classes
 │   ├─ subjects
 │   └─ students
 │
timetable
 ├─ classes
 ├─ subjects
 └─ users (teachers)
│
journal
 ├─ classes
 ├─ subjects
 ├─ students
 └─ users (teachers)
│
files
 └─ users (access control)
│
stats
 ├─ journal
 └─ classes
```

## Middleware Stack

1. **authGuard**: Validates JWT tokens
2. **roleGuard**: Checks user permissions
3. **errorHandler**: Centralized error handling
4. **validator**: Input validation
5. **logger**: Request/response logging
6. **rateLimiter**: API rate limiting
