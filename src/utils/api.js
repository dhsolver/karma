import CreateApi from '@services/api';
import CreateMockApi from '@services/mockApi';

const apiClient = process.env.USE_MOCK_API ? CreateMockApi() : CreateApi();

export default apiClient;
