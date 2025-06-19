class UserManager {
    constructor() {
        this.baseURL = '/api/users';
        this.editingId = null;
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadUsers();
    }

    bindEvents() {
        document.getElementById('userForm').addEventListener('submit', (e) => this.handleSubmit(e));
        document.getElementById('cancelBtn').addEventListener('click', () => this.cancelEdit());
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const userData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            age: parseInt(document.getElementById('age').value),
            city: document.getElementById('city').value.trim()
        };

        try {
            if (this.editingId) {
                await this.updateUser(this.editingId, userData);
            } else {
                await this.createUser(userData);
            }
            
            this.resetForm();
            this.loadUsers();
        } catch (error) {
            this.showMessage(error.message, 'error');
        }
    }

    async createUser(userData) {
        const response = await fetch(this.baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const result = await response.json();
        
        if (!result.success) {
            throw new Error(result.message || 'Failed to create user');
        }

        this.showMessage('User created successfully!', 'success');
    }

    async loadUsers() {
        try {
            const response = await fetch(this.baseURL);
            const result = await response.json();
            
            if (result.success) {
                this.displayUsers(result.data);
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            this.showMessage('Failed to load users: ' + error.message, 'error');
        }
    }

    displayUsers(users) {
        const usersList = document.getElementById('usersList');
        
        if (users.length === 0) {
            usersList.innerHTML = '<p class="loading">No users found. Add some users to get started!</p>';
            return;
        }

        usersList.innerHTML = users.map(user => `
            <div class="user-card">
                <div class="user-info">
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Age:</strong> ${user.age}</p>
                    <p><strong>City:</strong> ${user.city}</p>
                </div>
                <div class="user-actions">
                    <button class="edit-btn" onclick="userManager.editUser('${user._id}')">Edit</button>
                    <button class="delete-btn" onclick="userManager.deleteUser('${user._id}')">Delete</button>
                </div>
            </div>
        `).join('');
    }

    async editUser(id) {
        try {
            const response = await fetch(`${this.baseURL}/${id}`);
            const result = await response.json();
            
            if (result.success) {
                const user = result.data;
                document.getElementById('userId').value = user._id;
                document.getElementById('name').value = user.name;
                document.getElementById('email').value = user.email;
                document.getElementById('age').value = user.age;
                document.getElementById('city').value = user.city;
                
                document.getElementById('submitBtn').textContent = 'Update User';
                document.getElementById('cancelBtn').style.display = 'inline-block';
                this.editingId = id;
                
                // Scroll to form
                document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
            }
        } catch (error) {
            this.showMessage('Failed to load user data: ' + error.message, 'error');
        }
    }

    async updateUser(id, userData) {
        const response = await fetch(`${this.baseURL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const result = await response.json();
        
        if (!result.success) {
            throw new Error(result.message || 'Failed to update user');
        }

        this.showMessage('User updated successfully!', 'success');
    }

    async deleteUser(id) {
        if (!confirm('Are you sure you want to delete this user?')) {
            return;
        }

        try {
            const response = await fetch(`${this.baseURL}/${id}`, {
                method: 'DELETE'
            });

            const result = await response.json();
            
            if (result.success) {
                this.showMessage('User deleted successfully!', 'success');
                this.loadUsers();
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            this.showMessage('Failed to delete user: ' + error.message, 'error');
        }
    }

    cancelEdit() {
        this.resetForm();
    }

    resetForm() {
        document.getElementById('userForm').reset();
        document.getElementById('userId').value = '';
        document.getElementById('submitBtn').textContent = 'Add User';
        document.getElementById('cancelBtn').style.display = 'none';
        this.editingId = null;
    }

    showMessage(message, type) {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.error, .success');
        existingMessages.forEach(msg => msg.remove());

        const messageDiv = document.createElement('div');
        messageDiv.className = type;
        messageDiv.textContent = message;
        
        const container = document.querySelector('.container');
        container.insertBefore(messageDiv, container.firstChild.nextSibling);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// Initialize the app
const userManager = new UserManager();