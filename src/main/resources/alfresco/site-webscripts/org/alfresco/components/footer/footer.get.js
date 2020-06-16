/**
 * JS Controller for Share's footer component
 */

function main()
{
   var response = remote.call("/api/path/content/workspace/SpacesStore/Company%20Home/Data%20Dictionary/ecm4u/footer/content.html");
   if (response.status == 200)
   {
      model.footerContent = response;
   }
   model.licenseHolder = context.properties["editionInfo"].holder;
}

main();
