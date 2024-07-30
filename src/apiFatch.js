
import apiFetch from '@wordpress/api-fetch';

export function getPage( ) {
    return apiFetch({
        path: '/wp/v2/pages/225',
        method: 'POST',
        data: { title: 'New Post Title' },
    }).then((res) => {
        return res;
    });
}
