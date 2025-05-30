
        function togglePassword(fieldId, element) {
            const passwordField = document.getElementById(fieldId);
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                element.textContent = '👁️';
            } else {
                passwordField.type = 'password';
                element.textContent = '👁️';
            }
        }

        function showError(id, message) {
            document.getElementById(id).textContent = message;
        }

        function clearError(id) {
            document.getElementById(id).textContent = '';
        }

        function validateFirstName() {
            const firstName = document.getElementById('firstName').value.trim();
            if (firstName === '') {
                showError('firstNameError', 'First Name is required.');
                return false;
            }
            if (!/^[A-Za-z]+$/.test(firstName)) {
                showError('firstNameError', 'Only letters are allowed.');
                return false;
            }
            clearError('firstNameError');
            return true;
        }

        function validateLastName() {
            const lastName = document.getElementById('lastName').value.trim();
            if (lastName === '') {
                showError('lastNameError', 'Last Name is required.');
                return false;
            }
            if (!/^[A-Za-z]+$/.test(lastName)) {
                showError('lastNameError', 'Only letters are allowed.');
                return false;
            }
            clearError('lastNameError');
            return true;
        }

        function validateEmail() {
            const email = document.getElementById('email').value.trim();
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                showError('emailError', 'Email is required.');
                return false;
            }
            if (!regex.test(email)) {
                showError('emailError', 'Invalid email format.');
                return false;
            }
            clearError('emailError');
            return true;
        }

        function validatePhone() {
            const phone = document.getElementById('phone').value.trim();
            const regex = /^(09\d{8}|\+251\d{9})$/;
            if (phone === '') {
                showError('phoneError', 'Phone Number is required.');
                return false;
            }
            if (!regex.test(phone)) {
                showError('phoneError', 'Invalid Ethiopian phone number.');
                return false;
            }
            clearError('phoneError');
            return true;
        }

        function validatePassword() {
            const password = document.getElementById('password').value.trim();
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
            if (password === '') {
                showError('passwordError', 'Password is required.');
                return false;
            }
            if (password.length < 8) {
                showError('passwordError', 'Minimum 8 characters required.');
                return false;
            }
            if (!regex.test(password)) {
                showError('passwordError', 'Must include uppercase, lowercase, number, and special character.');
                return false;
            }
            clearError('passwordError');
            return true;
        }

        function validateConfirmPassword() {
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirmPassword').value.trim();
            if (confirmPassword === '') {
                showError('confirmPasswordError', 'Confirm Password is required.');
                return false;
            }
            if (password !== confirmPassword) {
                showError('confirmPasswordError', 'Passwords do not match.');
                return false;
            }
            clearError('confirmPasswordError');
            return true;
        }

        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const isValidFirstName = validateFirstName();
            const isValidLastName = validateLastName();
            const isValidEmail = validateEmail();
            const isValidPhone = validatePhone();
            const isValidPassword = validatePassword();
            const isValidConfirmPassword = validateConfirmPassword();

            if (isValidFirstName && isValidLastName && isValidEmail && isValidPhone && isValidPassword && isValidConfirmPassword) {
                alert('Form submitted successfully!');
                this.reset();
            }
        });
   