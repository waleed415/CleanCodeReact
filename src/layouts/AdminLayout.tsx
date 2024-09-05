import React from "react";
import { FooterBar, SearchBar, SideNav } from "../components/nvabars";
import { Outlet } from "react-router-dom";
//  import '../assets/admin.css';


class AdminLayout extends React.Component<{}, {
    cssLoaded: boolean;
  }> {

    constructor(props: any) {
        super(props);
        this.state = {
            cssLoaded: false,
          };
    }

    componentDidMount() {
        // Dynamically import the CSS file when the component mounts
        this.loadCSS('../assets/admin.css')
          .then(() => {
            this.setState({ cssLoaded: true });
          })
          .catch((error) => console.error('Error loading CSS:', error));
      }

      loadCSS(href: string): Promise<void> {
        debugger;
        return new Promise((resolve, reject) => {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = href;
    
          link.onload = () => resolve();
          link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
    
          document.head.appendChild(link);
        });
      }

    render(): React.ReactNode {
        return (
            <>
                <SideNav />
                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                    <SearchBar />
                    <div className="container-fluid py-4 bg-gray-200">
                        <Outlet />

                        <FooterBar />
                    </div>
                </main>
            </>
        );
    }
}

export default AdminLayout;