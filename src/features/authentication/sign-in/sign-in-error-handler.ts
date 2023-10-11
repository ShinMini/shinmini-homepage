import { FirebaseError } from 'firebase/app';

function signInErrorHandler(error: unknown) {
  if (!(error instanceof Error)) return 'Unknown Error Occurred! 알 수 없는 에러가 발생했습니다.';
  if (!(error instanceof FirebaseError)) return error.message;

  switch (error.code) {
    case 'auth/user-not-found' || 'auth/wrong-password':
      return '이메일 혹은 비밀번호가 일치하지 않습니다.';
    case 'auth/email-already-in-use':
      return '이미 사용 중인 이메일입니다.';
    case 'auth/weak-password':
      return '비밀번호는 6글자 이상이어야 합니다.';
    case 'auth/network-request-failed':
      return '네트워크 연결에 실패 하였습니다.';
    case 'auth/invalid-email':
      return '잘못된 이메일 형식입니다.';
    case 'auth/internal-error':
      return '잘못된 요청입니다.';
    default:
      return '로그인에 실패 하였습니다.';
  }
}

export default signInErrorHandler;
