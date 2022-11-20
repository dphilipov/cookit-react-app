function cx(input) {
  if (!Array.isArray(input)) {
    console.error('Please provide an array');
    return;
  }

  const flatString = input.join(' ').trim();

  return flatString;
}

export default cx;
