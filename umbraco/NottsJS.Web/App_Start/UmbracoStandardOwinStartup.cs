using Microsoft.Owin;
using Owin;
using Umbraco.Core;
using Umbraco.Core.Security;
using Umbraco.Web;
using Umbraco.Web.Security.Identity;
using Umbraco.IdentityExtensions;
using NottsJS.Web;
using Umbraco.RestApi;
using System.Web.Cors;

//To use this startup class, change the appSetting value in the web.config called 
// "owin:appStartup" to be "UmbracoStandardOwinStartup"

[assembly: OwinStartup("UmbracoStandardOwinStartup", typeof(UmbracoStandardOwinStartup))]

namespace NottsJS.Web
{
    /// <summary>
    /// The standard way to configure OWIN for Umbraco
    /// </summary>
    /// <remarks>
    /// The startup type is specified in appSettings under owin:appStartup - change it to "StandardUmbracoStartup" to use this class
    /// </remarks>
    public class UmbracoStandardOwinStartup : UmbracoDefaultOwinStartup
    {
        public override void Configuration(IAppBuilder app)
        {
            // Ensure the default options are configured
            base.Configuration(app);

            // Configuring the Umbraco REST API options
            app.ConfigureUmbracoRestApi(new UmbracoRestApiOptions()
            {
                // Modify the CorsPolicy as required
                CorsPolicy = new CorsPolicy()
                {
                    AllowAnyHeader = true,
                    AllowAnyMethod = true,
                    AllowAnyOrigin = true
                }
            });

            // Enabling the authentication based on Umbraco back office cookie
            app.UseUmbracoCookieAuthenticationForRestApi(ApplicationContext.Current);
            app.UseUmbracoBackOfficeTokenAuth();
        }
    }
}
