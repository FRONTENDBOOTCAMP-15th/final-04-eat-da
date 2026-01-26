'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/app/src/components/common/Header';
import BottomFixedButton from '@/app/src/components/common/BottomFixedButton';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const validateEmail = (value: string) => {
    if (!value) {
      return '필수 입력 사항입니다';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return '올바른 이메일 형식이 아닙니다';
    }
    return '';
  };

  const validatePassword = (value: string) => {
    if (!value) {
      return '필수 입력 사항입니다';
    } else if (value.length < 8) {
      return '비밀번호가 맞지 않습니다';
    }
    return '';
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    setEmailError(validateEmail(email));
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
    setPasswordError(validatePassword(password));
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (emailTouched) {
      setEmailError(validateEmail(value));
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (passwordTouched) {
      setPasswordError(validatePassword(value));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 모든 필드를 touched 상태로 변경
    setEmailTouched(true);
    setPasswordTouched(true);
    
    const newEmailError = validateEmail(email);
    const newPasswordError = validatePassword(password);
    
    setEmailError(newEmailError);
    setPasswordError(newPasswordError);
    
    if (!newEmailError && !newPasswordError) {
      console.log('로그인 시도:', { email, password });
      // TODO: 실제 로그인 API 호출
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header 컴포넌트 */}
      <Header title="로그인" showBackButton />

      {/* 헤더 높이만큼 여백 */}
      <div className="h-[60px]"></div>

      {/* 상단 컨텐츠 */}
      <div className="flex-1 px-5 py-8">
        <div className="max-w-md mx-auto">
          <form id="loginForm" onSubmit={handleSubmit} className="space-y-6">
            {/* 이메일 입력 */}
            <div>
              <label className="block text-paragraph font-medium text-gray-800 mb-2">
                이메일 <span className="text-eatda-orange">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                onBlur={handleEmailBlur}
                placeholder="example@youremail.com"
                className="w-full px-0 py-2 border-0 border-b border-gray-400 focus:outline-none focus:border-gray-600 placeholder:text-gray-500 text-paragraph text-gray-800"
              />
              {emailTouched && emailError && (
                <p className="text-eatda-orange text-x-small mt-2">{emailError}</p>
              )}
            </div>

            {/* 비밀번호 입력 */}
            <div>
              <label className="block text-paragraph font-medium text-gray-800 mb-2">
                비밀번호 <span className="text-eatda-orange">*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                onBlur={handlePasswordBlur}
                placeholder="현재 비밀번호를 입력하세요"
                className="w-full px-0 py-2 border-0 border-b border-gray-400 focus:outline-none focus:border-gray-600 placeholder:text-gray-500 text-paragraph text-gray-800"
              />
              {passwordTouched && passwordError && (
                <p className="text-eatda-orange text-x-small mt-2">{passwordError}</p>
              )}
            </div>

            {/* 회원가입 링크 */}
            <div className="text-left">
              <button
                type="button"
                onClick={() => router.push('/signup')}
                className="text-paragraph text-gray-600 underline hover:text-gray-800"
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* BottomFixedButton 컴포넌트 */}
      <BottomFixedButton as="button" formId="loginForm">
        로그인
      </BottomFixedButton>
    </div>
  );
}