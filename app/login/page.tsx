'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError('필수 입력 사항입니다');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError('올바른 이메일 형식이 아닙니다');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (value: string) => {
    if (!value) {
      setPasswordError('필수 입력 사항입니다');
    } else if (value.length < 8) {
      setPasswordError('비밀번호는 최소 8자 이상이어야 합니다');
    } else {
      setPasswordError('');
    }
  };

  const handleEmailBlur = () => {
    validateEmail(email);
  };

  const handlePasswordBlur = () => {
    validatePassword(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);
    
    if (!emailError && !passwordError && email && password) {
      console.log('로그인 시도:', { email, password });
      // TODO: 실제 로그인 API 호출
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 상단 컨텐츠 */}
      <div className="flex-1 px-5 py-8">
        <div className="max-w-md mx-auto">
          {/* 헤더 - 뒤로가기 + 로그인 제목 */}
          <div className="flex items-center mb-8">
            <button 
              onClick={() => router.back()}
              className="text-gray-900 mr-2"
              aria-label="뒤로가기"
            >
              <img src="/back.svg" alt="뒤로가기" width={10} height={18} />
            </button>
            <h1 className="text-2xl font-bold">로그인</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 이메일 입력 */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleEmailBlur}
                placeholder="example@youremail.com"
                className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-400 placeholder:text-gray-300 text-sm"
              />
              {emailError && (
                <p className="text-red-500 text-xs mt-2">{emailError}</p>
              )}
            </div>

            {/* 비밀번호 입력 */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                비밀번호 <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handlePasswordBlur}
                placeholder="안전한 비밀번호를 입력하세요"
                className="w-full px-0 py-2 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-400 placeholder:text-gray-300 text-sm"
              />
              {passwordError && (
                <p className="text-red-500 text-xs mt-2">{passwordError}</p>
              )}
            </div>

            {/* 회원가입 링크 */}
            <div className="text-left">
              <button
                type="button"
                onClick={() => router.push('/signup')}
                className="text-sm text-gray-600 underline hover:text-gray-900"
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 하단 고정 로그인 버튼 */}
      <button
        onClick={handleSubmit}
        className="w-full bg-eatda-orange hover:bg-red-500 text-white font-medium py-4 transition-colors"
      >
        로그인
      </button>
    </div>
  );
}