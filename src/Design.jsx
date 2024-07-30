import apiFetch from '@wordpress/api-fetch';
import { getPage } from './apiFatch';
import { useEffect, useState } from '@wordpress/element';

export default function Design() {

    const [postContent, setPostContent] = useState(null);
    const html = `
<div class="exad-accordion-text">
<div> <h2>Some title here</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
                                                                                                                                                                                                                                                                            <div class="exad-accordion-button">
            <a href="#">
                SEE DETAILS                                            </a>
        </div> 
                                                                </div>

                            <div class="exad-accordion-image">
    <img decoding="async" src="http://advanced-addon.test/wp-content/uploads/2024/07/2387460-768x768.jpg" alt="2387460.jpg" />                                </div>

</div>
</div>
</div>
                </div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</section>
</div>
`;
    useEffect(() => {
        getPage().then((res) => {
            setPostContent(res)
        });
    }, []);

    console.log(postContent?.content?.rendered);

    return (
        <>
            {/* {postContent?.content?.rendered ? <div dangerouslySetInnerHTML={{__html: html }}>Design</div> : ''} */}
            {/* <div dangerouslySetInnerHTML={{__html:  ''}}></div> */}
            <div dangerouslySetInnerHTML={{ __html:  postContent?.content?.rendered }} ></div>
        </>
    )
}
