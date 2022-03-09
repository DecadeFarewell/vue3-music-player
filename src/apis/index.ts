import http from '@/http/index';

const url = 'http://192.168.1.101:3000';

interface RecommendSong {
  id: number;
  type: number;
  name: string;
  picUrl: string;
}

// FIXME: 格式化和eslint还是有冲突!!!!!
const apis = {
  // 推荐歌单
  getRecommendSongs: async (params: { limit: number }): Promise<RecommendSong[]> => {
    const { data } = await http.get(`${url}/personalized`, params);
    return data.result;
  },
};

export default apis;
