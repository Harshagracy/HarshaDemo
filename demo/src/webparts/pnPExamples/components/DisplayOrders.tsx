import * as React from 'react';
import { sp } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/items/list";
import "@pnp/sp/lists";
import "@pnp/sp/site-users/web";

//import '@pnp/sp/presets/all';
import { PrimaryButton } from 'office-ui-fabric-react';
import { ListView, IViewField, SelectionMode } from "@pnp/spfx-controls-react/lib/ListView";

export interface IDisplayOrdersProps {

}
export interface IDisplayOrdersStates {
    allOrders: any[];
    currentUserId: number;
}
const viewFields: IViewField[] = [
    {
        name: 'OrderedProduct.Title',
        displayName: 'Ordered Product',
        sorting: true,
        maxWidth: 100
    },
    {
        name: 'UserName.Title',
        displayName: 'UserName',
        sorting: true,
        maxWidth: 100
    },
    {
        name: 'DateOfPurchase',
        displayName: "Date Of Purchase",
        sorting: true,
        maxWidth: 100
    },
    {
        name: 'OrderedQuantity',
        displayName: "Ordered Quantity",
        sorting: true,
        maxWidth: 100
    },
    {
        name: 'Status',
        displayName: "Status",
        sorting: true,
        maxWidth: 80
    }
];
export default class DisplayOrders extends React.Component<IDisplayOrdersProps, IDisplayOrdersStates> {
    constructor(props: IDisplayOrdersProps, state: IDisplayOrdersStates) {
        super(props);
        this.state = {
            allOrders: [],
            currentUserId: 0
        };
    }
    public componentWillMount() {
        this.getAllOrders();
        this.getUserId();
    }
    public getAllOrders = () => {
        sp.web.lists.getByTitle("Order").items
            .select("*", "UserName/Title", "OrderedProduct/Title")
            .expand("UserName", "OrderedProduct")
            .top(50)
            .get().then((items: any) => {
                this.setState({
                    allOrders: items
                });
            });
    }
    public getUserId = () => {
        sp.web.currentUser.get().then(data => {
            this.setState({
                currentUserId: data.Id
            });
        });
    }
    private _getSelection(items: any[]) {
        console.log('Selected items:', items);
    }
    public render(): React.ReactElement<IDisplayOrdersProps> {
        return (
            <React.Fragment>
                <h2>Displaying all Orders:</h2>
                <PrimaryButton text="Place Orders" onClick={this.addItems} style={{ marginBottom: 5 }} />
                <ListView
                    items={this.state.allOrders}
                    viewFields={viewFields}
                    iconFieldName="Packages"
                    compact={true}
                    selectionMode={SelectionMode.multiple}
                    selection={this._getSelection}
                    showFilter={true}
                    filterPlaceHolder="Search..."
                />
            </React.Fragment>
        );
    }
    public addItems = () => {
        sp.web.lists.getByTitle("Order").items.add({
            Title: "Title",
            UserNameId: 2,
            OrderedProductId: 5,
            DateOfPurchase: new Date(),
            Status: "Ordered",
            OrderedQuantity: 5
        }).then((iar: any) => {
            console.log(iar);
            this.getAllOrders();
        });

    }

}
