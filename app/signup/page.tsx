'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
    if (value.length < 8) return '비밀번호는 최소 8자 이상이어야 합니다';
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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
      {/* 상단 컨텐츠 */}
      <div className="flex-1 px-5 py-8 overflow-y-auto">
        <div className="max-w-md mx-auto">
          {/* 헤더 */}
          <div className="flex items-center mb-8">
            <button 
              onClick={() => router.back()}
              className="text-gray-900 mr-2"
              aria-label="뒤로가기"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <h1 className="text-2xl font-bold">회원가입</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 가입유형 */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                가입유형 <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedType('individual')}
                  className={`flex-1 py-3 text-sm font-medium rounded-lg transition-colors ${
                    selectedType === 'individual'
                      ? 'bg-gray-200 text-gray-900'
                      : 'bg-gray-50 text-gray-600'
                  }`}
                >
                  자취생
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedType('business')}
                  className={`flex-1 py-3 text-sm font-medium rounded-lg transition-colors ${
                    selectedType === 'business'
                      ? 'bg-gray-200 text-gray-900'
                      : 'bg-gray-50 text-gray-600'
                  }`}
                >
                  주부
                </button>
              </div>
            </div>

            {/* 이름 */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                placeholder="박주부"
                className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-400 placeholder:text-gray-300 text-sm"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-2">{errors.name}</p>
              )}
            </div>

            {/* 이메일 */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                placeholder="example@youremail.com"
                className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-400 placeholder:text-gray-300 text-sm"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-2">{errors.email}</p>
              )}
            </div>

            {/* 비밀번호 */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                비밀번호 <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                onBlur={() => handleBlur('password')}
                placeholder="안전한 비밀번호를 입력하세요"
                className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-400 placeholder:text-gray-300 text-sm"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-2">{errors.password}</p>
              )}
              <p className="text-gray-400 text-xs mt-1">비밀번호는 8자 이상, 영문, 숫자, 특수문자를 사용하세요</p>
            </div>

            {/* 비밀번호 확인 */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                비밀번호 확인 <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                onBlur={() => handleBlur('confirmPassword')}
                placeholder="비밀번호를 한번 더 입력하세요"
                className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-400 placeholder:text-gray-300 text-sm"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-2">{errors.confirmPassword}</p>
              )}
            </div>

            {/* 전화번호 */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                전화번호 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                onBlur={() => handleBlur('phone')}
                placeholder="010-0000-0000"
                className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-400 placeholder:text-gray-300 text-sm"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-2">{errors.phone}</p>
              )}
            </div>

            {/* 주소 */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                주소 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                onBlur={() => handleBlur('address')}
                placeholder="서울특별시 강남구 도곡동"
                className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-400 placeholder:text-gray-300 text-sm"
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-2">{errors.address}</p>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* 회원가입 버튼 */}
      <button
        onClick={handleSubmit}
        className="w-full bg-red-400 hover:bg-red-500 text-white font-medium py-4 transition-colors"
      >
        회원가입
      </button>
    </div>
  );
}