import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';
export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): void => {
    // @ts-ignore
    return v2.config({
      cloud_name: 'di1lz4bf8',
      api_key: '384578681147653',
      api_secret: 'VMjnl8xBT9uZNggqxFQ-RDHACOg',
    });
  },
};
