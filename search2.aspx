<%@ Page Language="C#" %>
<%@ Import Namespace="System.Web.Services" %>
<script type="text/C#" runat="server">
    [WebMethod]
    public static string GetQuery(string searchTerm)
    {
        String suggestions = "getquery test";
        return suggestions;
    }
</script>