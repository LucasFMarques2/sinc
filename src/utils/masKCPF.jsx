export const maskCPF = (cpf) => {
    if (!cpf) return '';
    
    // Garantindo que o CPF esteja no formato correto
    const formattedCPF = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    
    // Mascarando o CPF
    return formattedCPF.replace(/^(\d{3})\.(\d{3})\.(\d{3})-(\d{2})$/, '***.$2.***-**');
  };