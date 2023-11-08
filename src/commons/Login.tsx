import React from 'react';

const Login = (props: React.PropsWithChildren) => {
  return (
    <button className="w-24 h-8 ml-10 bg-white border rounded-xl border-custom-green">
      <div className="text-base font-bold text-center text-custom-green">
        Log in
      </div>
    </button>
  );
};

export default Login;
