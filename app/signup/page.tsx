'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/app/src/components/common/Header';
import BottomFixedButton from '@/app/src/components/common/BottomFixedButton';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: ''
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    phone: false,
    address: false
  });
  const [selectedType, setSelectedType] = useState<'individual' | 'business'>('individual');

  const validateName = (value: string) => {
    if (!value) return '필수 입력 사항입니다';
    return '';
  };

  const validateEmail = (value: string) => {
    if (!value) return '필수 입력 사항입니다';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return '필수 입력 사항입니다';
    return '';
  };

  const validatePassword = (value: string) => {
    if (!value) return '필수 입력 사항입니다';
    if (value.length < 8) return '비밀번호는 8자 이상 영문과 숫자로 이루어져야 합니다';
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/.test(value)) return '비밀번호는 8자 이상 영문과 숫자로 이루어져야 합니다';
    return '';
  };

  const validateConfirmPassword = (value: string) => {
    if (!value) return '필수 입력 사항입니다';
    if (value !== formData.password) return '비밀번호가 일치하지 않습니다';
    return '';
  };

  const validatePhone = (value: string) => {
    if (!value) return '필수 입력 사항입니다';
    return '';
  };

  const validateAddress = (value: string) => {
    if (!value) return '필수 입력 사항입니다';
    return '';
  };

  const handleBlur = (field: string) => {
    // touched 상태 업데이트
    setTouched(prev => ({ ...prev, [field]: true }));
    
    let error = '';
    const value = formData[field as keyof typeof formData];

    switch (field) {
      case 'name':
        error = validateName(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'password':
        error = validatePassword(value);
        break;
      case 'confirmPassword':
        error = validateConfirmPassword(value);
        break;
      case 'phone':
        error = validatePhone(value);
        break;
      case 'address':
        error = validateAddress(value);
        break;
    }

    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // 입력 중에는 에러 초기화
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 모든 필드를 touched 상태로 변경
    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
      phone: true,
      address: true
    });

    // 모든 필드 검증
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      confirmPassword: validateConfirmPassword(formData.confirmPassword),
      phone: validatePhone(formData.phone),
      address: validateAddress(formData.address)
    };

    setErrors(newErrors);

    // 에러가 없으면 제출
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (!hasErrors) {
      console.log('회원가입 시도:', { ...formData, type: selectedType });
      // 회원가입 API 호출
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header 컴포넌트 */}
      <Header title="회원가입" showBackButton />

      {/* 헤더 높이만큼 여백 */}
      <div className="h-[60px]"></div>

      {/* 상단 컨텐츠 */}
      <div className="flex-1 px-5 py-8 overflow-y-auto pb-32">
        <div className="max-w-md mx-auto">
          <form id="signupForm" onSubmit={handleSubmit} className="space-y-6">
            {/* 가입유형 */}
            <div>
              <label className="block text-paragraph font-medium text-gray-800 mb-3">
                가입유형 <span className="text-eatda-orange">*</span>
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedType('individual')}
                  className={`flex-1 py-3 text-paragraph font-medium rounded-lg transition-colors ${
                    selectedType === 'individual'
                      ? 'bg-eatda-orange text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  자취생
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedType('business')}
                  className={`flex-1 py-3 text-paragraph font-medium rounded-lg transition-colors ${
                    selectedType === 'business'
                      ? 'bg-eatda-orange text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  주부
                </button>
              </div>
            </div>

            {/* 이름 */}
            <div>
              <label className="block text-paragraph font-medium text-gray-800 mb-2">
                이름 <span className="text-eatda-orange">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                placeholder="박주부"
                className="w-full px-0 py-2 border-0 border-b border-gray-400 focus:outline-none focus:border-gray-600 placeholder:text-gray-500 text-paragraph text-gray-800"
              />
              {touched.name && errors.name && (
                <p className="text-eatda-orange text-x-small mt-2">{errors.name}</p>
              )}
            </div>

            {/* 이메일 */}
            <div>
              <label className="block text-paragraph font-medium text-gray-800 mb-2">
                이메일 <span className="text-eatda-orange">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                placeholder="example@youremail.com"
                className="w-full px-0 py-2 border-0 border-b border-gray-400 focus:outline-none focus:border-gray-600 placeholder:text-gray-500 text-paragraph text-gray-800"
              />
              {touched.email && errors.email && (
                <p className="text-eatda-orange text-x-small mt-2">{errors.email}</p>
              )}
            </div>

            {/* 비밀번호 */}
            <div>
              <label className="block text-paragraph font-medium text-gray-800 mb-2">
                비밀번호 <span className="text-eatda-orange">*</span>
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                onBlur={() => handleBlur('password')}
                placeholder="안전한 비밀번호를 입력하세요"
                className="w-full px-0 py-2 border-0 border-b border-gray-400 focus:outline-none focus:border-gray-600 placeholder:text-gray-500 text-paragraph text-gray-800"
              />
              {touched.password && errors.password && (
                <p className="text-eatda-orange text-x-small mt-2">{errors.password}</p>
              )}
            </div>

            {/* 비밀번호 확인 */}
            <div>
              <label className="block text-paragraph font-medium text-gray-800 mb-2">
                비밀번호 확인 <span className="text-eatda-orange">*</span>
              </label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                onBlur={() => handleBlur('confirmPassword')}
                placeholder="비밀번호를 한번 더 입력하세요"
                className="w-full px-0 py-2 border-0 border-b border-gray-400 focus:outline-none focus:border-gray-600 placeholder:text-gray-500 text-paragraph text-gray-800"
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="text-eatda-orange text-x-small mt-2">{errors.confirmPassword}</p>
              )}
            </div>

            {/* 전화번호 */}
            <div>
              <label className="block text-paragraph font-medium text-gray-800 mb-2">
                전화번호 <span className="text-eatda-orange">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                onBlur={() => handleBlur('phone')}
                placeholder="010-0000-0000"
                className="w-full px-0 py-2 border-0 border-b border-gray-400 focus:outline-none focus:border-gray-600 placeholder:text-gray-500 text-paragraph text-gray-800"
              />
              {touched.phone && errors.phone && (
                <p className="text-eatda-orange text-x-small mt-2">{errors.phone}</p>
              )}
            </div>

            {/* 주소 */}
            <div>
              <label className="block text-paragraph font-medium text-gray-800 mb-2">
                주소 <span className="text-eatda-orange">*</span>
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                onBlur={() => handleBlur('address')}
                placeholder="서울특별시 강남구 도곡동"
                className="w-full px-0 py-2 border-0 border-b border-gray-400 focus:outline-none focus:border-gray-600 placeholder:text-gray-500 text-paragraph text-gray-800"
              />
              {touched.address && errors.address && (
                <p className="text-eatda-orange text-x-small mt-2">{errors.address}</p>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* BottomFixedButton 컴포넌트 */}
      <BottomFixedButton as="button" formId="signupForm">
        회원가입
      </BottomFixedButton>
    </div>
  );
}