"use client"

const ErrorBoundary = ({error}:any) => {
  return (
    <div>{error.message}</div>
  )
}

export default ErrorBoundary