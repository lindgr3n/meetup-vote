import { env } from '$env/dynamic/private';
import { XataClient } from '../../xata';

export const xata = new XataClient({ apiKey: env.XATA_API_KEY });
