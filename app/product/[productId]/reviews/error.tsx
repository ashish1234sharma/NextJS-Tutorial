"use client"

const ErrorBoundary = ({error,reset}:any) => {
  return (
    <>
    <button onClick={reset}> Try Again</button>
    <div>{error.message}</div>
    </>
  )
}

export default ErrorBoundary