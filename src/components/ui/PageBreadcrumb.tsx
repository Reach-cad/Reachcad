
import { useLocation } from "react-router-dom";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const PageBreadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  
  // Don't show breadcrumbs on homepage
  if (pathSegments.length === 0) {
    return null;
  }
  
  return (
    <div className="container mx-auto px-4 py-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="flex items-center">
              <Home size={16} className="mr-1" />
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          
          {pathSegments.map((segment, index) => {
            const isLastItem = index === pathSegments.length - 1;
            const formattedSegment = segment.charAt(0).toUpperCase() + segment.slice(1);
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
            
            return (
              <BreadcrumbItem key={segment}>
                {isLastItem ? (
                  <BreadcrumbPage>{formattedSegment}</BreadcrumbPage>
                ) : (
                  <>
                    <BreadcrumbLink href={href}>{formattedSegment}</BreadcrumbLink>
                    <BreadcrumbSeparator />
                  </>
                )}
              </BreadcrumbItem>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default PageBreadcrumb;
