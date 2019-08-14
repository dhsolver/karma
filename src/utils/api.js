import CreateApi from '../service/api';
import CreateMockApi from '../service/mockApi';

const apiClient = process.env.USE_MOCK_API ? CreateMockApi() : CreateApi();

export default apiClient;
