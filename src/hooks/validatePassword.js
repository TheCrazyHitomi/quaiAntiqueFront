import { useState, useEffect } from 'react';

export const useValidatePassword = (password) => {
    const [strength, setStrength] = useState(0);
    const [conditions, setConditions] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false
    })

    useEffect(() => {

        let currentStrength = 0;
            const newConditions = {
                length: password.length >= 6,
                uppercase: /[A-Z]/.test(password),
                lowercase: /[a-z]/.test(password),
                number: /\d/.test(password),
                special: /[!@#$%^&*]/.test(password)
            }

            Object.values(newConditions).forEach(cond => {
                if (cond) currentStrength += 1;
            });
            setStrength(currentStrength);
            setConditions(newConditions);
    }, [password]);
        


        const getStrengthLabel = () => {
            if (strength === 5) return 'Very Strong';
            if (strength === 4) return 'Strong';
            if (strength === 3) return 'Medium';
            if (strength === 2) return 'Weak';
            return 'Very Weak';
        };

        const getStrengthVariant = () => {
            if (strength === 5) return 'success';
            if (strength === 4) return 'info';
            if (strength === 3) return 'warning';
            if (strength === 2) return 'danger';
            return 'secondary';
        };
        return  {strength, conditions, getStrengthLabel, getStrengthVariant};
}

export default useValidatePassword;