export const validatePassword = (password) => {
    let strength = 0;
            const conditions = {
                length: password.length >= 6,
                uppercase: /[A-Z]/.test(password),
                lowercase: /[a-z]/.test(password),
                number: /\d/.test(password),
                special: /[!@#$%^&*]/.test(password)
            }

            Object.values(conditions).forEach(condition => {
                if (condition) strength += 1;
            });
            return  {strength, conditions};
        };


        export const getStrengthLabel = (strength) => {
            if (strength === 5) return 'Very Strong';
            if (strength === 4) return 'Strong';
            if (strength === 3) return 'Medium';
            if (strength === 2) return 'Weak';
            return 'Very Weak';
        };

        export const getStrengthVariant = (strength) => {
            if (strength === 5) return 'success';
            if (strength === 4) return 'info';
            if (strength === 3) return 'warning';
            if (strength === 2) return 'danger';
            return 'secondary';
        };