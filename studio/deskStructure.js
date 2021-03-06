import S from "@sanity/desk-tool/structure-builder";
import { HiOutlineCog } from "react-icons/hi";
import { BsPersonBadge } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";


// Add Schema type to hidden
const hiddenDocTypes = listItem =>
    !["siteconfig", "about", "home", "contact"].includes(
        listItem.getId()
    );

// Render a custom UI to view siteconfig & pages
// and showing other items except mentioed in the hiddendoctypes
export default () =>
    S.list()
        .title("Content Manager")
        .items([
            S.listItem()
                .title("Site config")
                .icon(HiOutlineCog)
                .child(
                    S.editor()
                        .schemaType("siteconfig")
                        .documentId("siteconfig")
                ),
            S.listItem()
                .title("About Page")
                .icon(BsPersonBadge)
                .child(
                    S.editor()
                        .schemaType("about")
                        .documentId("about")
                ),
            S.listItem()
                .title("Contact Page")
                .icon(MdContactMail)
                .child(
                    S.editor()
                        .schemaType("contact")
                        .documentId("contact")
                ),
            // Add a visual divider (optional)
            // S.divider(),
            // S.documentTypeListItem("page").title("Pages"),
            S.divider(),
            ...S.documentTypeListItems()?.filter(hiddenDocTypes)
        ]);