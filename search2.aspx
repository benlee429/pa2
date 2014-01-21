<%@ Page Language="C#" %>
<%@ Import Namespace="System.Web.Services" %>
<script type="text/C#" runat="server">
    [WebMethod]
    public static string GetQuery(string searchTerm)
    {
        return "<p>" + searchTerm + "</p>";
    }
</script>