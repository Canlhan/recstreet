const handleSuccess = (response) => {
    // Başarı durumunda burada işlemler yapabilirsiniz.
    return response.data;
  };
  
  const handleApiError = (error) => {
    // API hata durumunu burada işleyebilir ve uygun bir şekilde kullanıcıya bildirebilirsiniz.
    console.error('API Error:', error);
    throw error;
  };
  
  const handleNotification = (message) => {
    // Bildirim durumunu burada işleyebilir ve kullanıcıya bildirebilirsiniz.
    console.log('Notification:', message);
  };
  
  const handleTest = (data) => {
    // Test durumunu burada işleyebilirsiniz.
    console.log('Test Data:', data);
  };
  
  const handleError = (error) => {
    // Genel hata durumunu burada işleyebilir ve uygun bir şekilde kullanıcıya bildirebilirsiniz.
    console.error('Error:', error);
    throw error;
  };
  
  const tnaeService = {
    handleSuccess,
    handleApiError,
    handleNotification,
    handleTest,
    handleError,
  };
  
  export default tnaeService;