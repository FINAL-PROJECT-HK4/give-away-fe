import { useEffect, useMemo, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axiosInstance from "../../utils/axiosInstance";
import ConfettiExplosion from "react-confetti-explosion";


const Reward = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [ticket, setTicket] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const [reward, setReward] = useState("");
  const [disableTransition, setDisableTransition] = useState(false);


  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axiosInstance.get(`/user`);

        if (response) {
          setTicket(response?.data?.ticket);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    getUser();
  }, [reward]);

const legendItems = [
    { name: "10 Points", color: "#FF5733" },
    { name: "1 Ticket", color: "#33FF57" },
    { name: "100 Points", color: "#3357FF" },
    { name: "500 Points", color: "#FF33A1" },
  ];

  const options = useMemo(() => {
    return {
      chart: {
        type: "pie",
        backgroundColor: "transparent",
        plotShadow: false,
        width: 300,
        height: 300,
        spacingTop: 0,
        spacingBottom: 0,
        spacingLeft: 0,
        spacingRight: 0,
      },
      title: {
        text: "",
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          innerSize: "60%",
          depth: 45,
          dataLabels: {
            enabled: true, 
            style: {
              fontSize: '12px', 
              fontWeight: 'bold',
              color: '#000000',
            },
            formatter: function (this: Highcharts.Point): string {  
              return this.name; 
            },
            distance: 10, 
          },
          allowPointSelect: true,
          cursor: "pointer",
          states: {
            hover: {
              enabled: true,
              halo: {
                size: 0,
              },
            },
          },
          point: {
            events: {
              mouseOver: function (this: any) {
                this.slice(true);
              },
              mouseOut: function (this: any) {
                this.slice(false);
              },
            },
          },
        },
      },
      series: [
        {
          name: "BTP",
          colorByPoint: true,
          data: [
            { name: "10 Points", y: 25, color: "#FF5733" },
            { name: "1 Ticket", y: 25, color: "#33FF57" },
            { name: "100 Points", y: 25, color: "#3357FF" },
            { name: "500 Points", y: 25, color: "#FF33A1" }
          ], 
        },
      ],
    };
  }, []);
  
  
  

  const handleSpin =async () => {
    setLoading(true)
    setDisableTransition(true);
    const response = await axiosInstance.get(`/user/spin`);
    if(response.data){
      setRotation(5*360 - (response.data.spinAngle));
      setTimeout(()=>{
        setReward(response.data.reward)
      },3000)
    }

    setTimeout(() => {
      setRotation(0);
      setReward("")
      setDisableTransition(false);
      setLoading(false)
    }, 8000);
  };
  
  
  return (
    <div className="flex  items-center h-screen flex-col">
      
      <div className="relative flex items-center justify-center pb-3">
            <div
              style={{
                position: "relative",
                width: "300px",
                height: "300px",
              }}
              className=" rounded-full"
            >
                <>
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: "5px solid white",
                      boxSizing: "border-box",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "5px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0",
                      height: "0",
                      borderLeft: "10px solid transparent",
                      borderRight: "10px solid transparent",
                      borderTop: "10px solid white",
                      zIndex: 1,
                    }}
                  />
                </>

              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  transform: `rotate(${rotation}deg)`,
                  transition: disableTransition ? "transform 3s ease-out" : "none",
                  zIndex: 0,
                }}
              >
                <HighchartsReact highcharts={Highcharts} options={options} />
              </div>
            </div>

            <div
              className=" absolute text-center text-[#CCFD0A] font-bold text-2xl font-inter"
              style={{ textShadow: "0px 0px 10px #CCFD0A" }}
            >
              <p>
                {reward &&
                  <div className="flex">
                    <ConfettiExplosion />
                    <div>🎉{reward}🎉</div>
                  </div>
                }
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex flex-wrap justify-between text-center items-center">
              {legendItems.map((item, index) => (
                <div key={index} className="flex items-center justify-center mb-4 w-1/2"> 
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: item.color,
                      marginRight: "10px",
                      borderRadius: "50%", 
                    }}
                  />
                  <div className="text-base ">{item.name}</div>
                </div>
              ))}
            </div>
        </div>
        <div className="w-full pt-6">
          <button
            onClick={handleSpin || loading}
            disabled={ticket === 0}  
            className={`w-full h-12 font-bold rounded-full text-black bg-[#CFFF05] 
                        ${ticket === 0 || loading? 'opacity-50 cursor-not-allowed' : ''}`} 
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              `Spin (${ticket}🎟️)`
            )}
          </button>
        </div>

    </div>
  );
};

export default Reward;
