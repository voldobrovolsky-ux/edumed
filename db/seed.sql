-- EduMed Seed Data v0.1

-- Insert default roles
INSERT INTO roles (name, description) VALUES
    ('admin', 'System administrator with full access'),
    ('teacher', 'Teacher with access to classes and grading'),
    ('student', 'Student with access to own data'),
    ('parent', 'Parent with access to child data');

-- Insert default permissions
INSERT INTO permissions (name, resource, action, description) VALUES
    ('manage_users', 'users', 'manage', 'Full user management'),
    ('view_users', 'users', 'view', 'View user information'),
    ('manage_classes', 'classes', 'manage', 'Full class management'),
    ('view_classes', 'classes', 'view', 'View class information'),
    ('manage_grades', 'grades', 'manage', 'Enter and modify grades'),
    ('view_own_grades', 'grades', 'view', 'View own grades'),
    ('view_child_grades', 'grades', 'view', 'View child grades'),
    ('manage_timetable', 'timetable', 'manage', 'Create and modify timetable'),
    ('view_timetable', 'timetable', 'view', 'View timetable'),
    ('manage_documents', 'documents', 'manage', 'Upload and manage documents'),
    ('view_documents', 'documents', 'view', 'View documents'),
    ('view_statistics', 'statistics', 'view', 'View statistics and reports');

-- Assign permissions to roles
-- Admin gets all permissions
INSERT INTO role_permissions (role_id, permission_id)
SELECT 1, id FROM permissions;

-- Teacher permissions
INSERT INTO role_permissions (role_id, permission_id)
SELECT 2, id FROM permissions WHERE name IN (
    'view_users', 'view_classes', 'manage_grades', 
    'manage_timetable', 'view_timetable', 'manage_documents', 
    'view_documents', 'view_statistics'
);

-- Student permissions
INSERT INTO role_permissions (role_id, permission_id)
SELECT 3, id FROM permissions WHERE name IN (
    'view_own_grades', 'view_timetable', 'view_documents'
);

-- Parent permissions
INSERT INTO role_permissions (role_id, permission_id)
SELECT 4, id FROM permissions WHERE name IN (
    'view_child_grades', 'view_timetable', 'view_documents'
);

-- Insert sample school
INSERT INTO schools (name, address, phone, email, website, director_name, academic_year) VALUES
    ('Sample School', '123 Education St, City', '+1234567890', 'info@sampleschool.edu', 'www.sampleschool.edu', 'John Director', '2025-2026');

-- Insert sample subjects
INSERT INTO subjects (name, code, description) VALUES
    ('Mathematics', 'MATH', 'Mathematics and algebra'),
    ('English Language', 'ENG', 'English language and literature'),
    ('Physics', 'PHYS', 'Physics and natural sciences'),
    ('Chemistry', 'CHEM', 'Chemistry'),
    ('Biology', 'BIO', 'Biology and life sciences'),
    ('History', 'HIST', 'World and national history'),
    ('Geography', 'GEO', 'Geography and earth sciences'),
    ('Physical Education', 'PE', 'Physical education and sports'),
    ('Art', 'ART', 'Fine arts and drawing'),
    ('Music', 'MUS', 'Music and performing arts');

-- Sample admin user (password: admin123)
INSERT INTO users (email, password_hash, first_name, last_name) VALUES
    ('admin@edumed.local', '$2b$10$YourHashedPasswordHere', 'Admin', 'User');

INSERT INTO user_roles (user_id, role_id)
SELECT id, 1 FROM users WHERE email = 'admin@edumed.local';
