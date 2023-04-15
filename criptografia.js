const rules = [
    { from: 'e', to: 'enter' },
    { from: 'i', to: 'imes' },
    { from: 'a', to: 'ai' },
    { from: 'o', to: 'ober' },
    { from: 'u', to: 'ufat' },
  ];
  
  function encrypt(text) {
    let encrypted = text;
    for (const rule of rules) {
      const regex = new RegExp(rule.from, 'g');
      encrypted = encrypted.replace(regex, rule.to);
    }
    return encrypted;
  }
  
  function decrypt(text) {
    let decrypted = text;
    for (const rule of rules) {
      const regex = new RegExp(rule.to, 'g');
      decrypted = decrypted.replace(regex, rule.from);
    }
    return decrypted;
  }
  
  document.getElementById('actionButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    if (document.getElementById('actionButton').textContent === 'Encriptar') {
      outputText.value = encrypt(inputText);
    } else {
      outputText.value = decrypt(inputText);
    }
  });
  
  document.getElementById('switchButton').addEventListener('click', () => {
    const actionButton = document.getElementById('actionButton');
    if (actionButton.textContent === 'Encriptar') {
      actionButton.textContent = 'Desencriptar';
    } else {
      actionButton.textContent = 'Encriptar';
    }
  });
  
  document.getElementById('copyButton').addEventListener('click', () => {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
  });
  