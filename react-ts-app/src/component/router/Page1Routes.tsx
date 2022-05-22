import Page1 from "../Page1";
import Page1DetailA from "../Page1DetailA";
import Page1DetailB from "../Page1DetailB";
import Page1detailUrlParameter from "../Page1detailUrlParameter";

export const page1Routes = [
    {
        path: '',
        index: true,
        element: <Page1 />
    },
    {
        path: 'detaila',
        index: false,
        element: <Page1DetailA />
    },
    {
        path: 'detailb',
        index: false,
        element: <Page1DetailB />
    },
    {
        path: 'detaila/:id',
        index: false,
        element: <Page1detailUrlParameter />
    }
]