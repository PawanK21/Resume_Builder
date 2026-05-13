export const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isValidURL = (url) => {
  try {
    new URL(url.startsWith('http') ? url : `https://${url}`);
    return true;
  } catch {
    return false;
  }
};

export const calculateCompletion = (data) => {
  let total = 0;
  let filled = 0;
  Object.values(data.personal).forEach(v => {
    total++;
    if (v && v.trim()) filled++;
  });
  total++;
  if (data.summary && data.summary.trim()) filled++;
  total++;
  if (data.experience.length > 0) filled++;
  total++;
  if (data.education.length > 0) filled++;
  total++;
  if (data.skills.technical.length > 0) filled++;
  return Math.round((filled / total) * 100);
};
