<template>
  <v-container class="pt-0">
    <v-row>
      <skill-detail :skills="programmings" skillGenre="Programming Languages" />
      <skill-detail :skills="frameworks" skillGenre="Frameworks" />
    </v-row>
    <v-row>
      <skill-detail
        :skills="amazonWebServices1"
        skillGenre="Amazon Web Services - 1"
      />
      <skill-detail
        :skills="amazonWebServices2"
        skillGenre="Amazon Web Services - 2"
      />
    </v-row>
    <v-row>
      <skill-detail
        :skills="amazonWebServices3"
        skillGenre="Amazon Web Services - 3"
      />
      <skill-detail
        :skills="amazonWebServices4"
        skillGenre="Amazon Web Services - 4"
      />
    </v-row>
  </v-container>
</template>

<script>
import SkillDetail from "../components/SkillDetail";

export default {
  components: {
    SkillDetail
  },
  data() {
    return {
      programmings: [
        {
          name: "HTML5",
          exp: 72,
          icon: "mdi-language-html5",
          color: "#F26525"
        },
        {
          name: "CSS3",
          exp: 63,
          icon: "mdi-language-css3",
          color: "#29A9DF"
        },
        {
          name: "JavaScript (〜ES2018)",
          exp: 76,
          icon: "mdi-language-javascript",
          color: "#FDD83C"
        },
        {
          name: "Python3",
          exp: 52,
          icon: "mdi-language-python",
          color: "#0277BD"
        },
        {
          name: "PHP",
          exp: 47,
          icon: "mdi-language-php",
          color: "#777BB3"
        }
      ],
      frameworks: [
        {
          name: "Laravel",
          exp: 47,
          icon: "mdi-laravel",
          color: "#FC4F3D"
        },
        {
          name: "Django",
          exp: 27,
          img: "/django.png",
          color: "#1d5162"
        },
        {
          name: "Vue.js",
          exp: 53,
          icon: "mdi-vuejs",
          color: "#41B883"
        },
        {
          name: "Vuetify.js",
          exp: 48,
          icon: "mdi-vuetify",
          color: "#7BC6FF"
        },
        {
          name: "Nuxt.js",
          exp: 43,
          icon: "mdi-nuxt",
          color: "#40B883"
        }
      ],
      amazonWebServices1: [
        {
          name: "EC2",
          exp: 88,
          img: "/ec2.png",
          color: "#F68637"
        },
        {
          name: "Lambda",
          exp: 67,
          img: "/lambda.png",
          color: "#F68637"
        },
        {
          name: "Elastic Beanstalk",
          exp: 54,
          img: "/elasticbeanstalk.png",
          color: "#F68637"
        },
        {
          name: "S3",
          exp: 52,
          img: "/s3.png",
          color: "#3e8523"
        },
        {
          name: "EFS",
          exp: 36,
          img: "/efs.png",
          color: "#3e8523"
        },
        {
          name: "FSx",
          exp: 26,
          img: "/fsx.png",
          color: "#3e8523"
        },
        {
          name: "S3 Glacier",
          exp: 35,
          img: "/glacier.png",
          color: "#3e8523"
        }
      ],
      amazonWebServices2: [
        {
          name: "RDS",
          exp: 73,
          img: "/rds.png",
          color: "#4359dc"
        },
        {
          name: "VPC",
          exp: 82,
          img: "/vpc.png",
          color: "#7e4cdb"
        },
        {
          name: "CloudFront",
          exp: 38,
          img: "/cloudfront.png",
          color: "#7e4cdb"
        },
        {
          name: "Route 53",
          exp: 74,
          img: "/route53.png",
          color: "#7e4cdb"
        },
        {
          name: "API Gateway",
          exp: 68,
          img: "/apigateway.png",
          color: "#7e4cdb"
        },
        {
          name: "Cloud9",
          exp: 67,
          img: "/cloud9.png",
          color: "#4259db"
        },
        {
          name: "Support",
          exp: 92,
          img: "/support.png",
          color: "#4259db"
        }
      ],
      amazonWebServices3: [
        {
          name: "CloudWatch",
          exp: 86,
          img: "/cloudwatch.png",
          color: "#df3372"
        },
        {
          name: "Auto Scaling",
          exp: 67,
          img: "/autoscaling.png",
          color: "#df3372"
        },
        {
          name: "CloudFormation",
          exp: 31,
          img: "/cloudformation.png",
          color: "#df3372"
        },
        {
          name: "CloudTrail",
          exp: 86,
          img: "/cloudtrail.png",
          color: "#df3372"
        },
        {
          name: "Config",
          exp: 67,
          img: "/config.png",
          color: "#df3372"
        },
        {
          name: "Service Catalog",
          exp: 36,
          img: "/servicecatalog.png",
          color: "#df3372"
        },
        {
          name: "Systems Manager",
          exp: 54,
          img: "/systemsmanager.png",
          color: "#df3372"
        },
        {
          name: "Trusted Advisor",
          exp: 76,
          img: "/trustedadvisor.png",
          color: "#df3372"
        },
        {
          name: "Personal Health Dashboard",
          exp: 85,
          img: "/personalhealthdashboard.png",
          color: "#df3372"
        }
      ],
      amazonWebServices4: [
        {
          name: "IAM",
          exp: 72,
          img: "/iam.png",
          color: "#e33339"
        },
        {
          name: "Certificate Manager",
          exp: 56,
          img: "/certificatemanager.png",
          color: "#e33339"
        },
        {
          name: "Key Management Service",
          exp: 54,
          img: "/certificatemanager.png",
          color: "#e33339"
        },
        {
          name: "Simple Notification Service",
          exp: 52,
          img: "/simplenotificationservice.png",
          color: "#e03473"
        },
        {
          name: "Simple Queue Service",
          exp: 46,
          img: "/simplequeueservice.png",
          color: "#e03473"
        },
        {
          name: "Simple Email Service",
          exp: 53,
          img: "/simpleemailservice.png",
          color: "#445cdf"
        },
        {
          name: "WorkMail",
          exp: 43,
          img: "/workmail.png",
          color: "#e5353a"
        },
        {
          name: "WorkSpaces",
          exp: 62,
          img: "/workspaces.png",
          color: "#369a84"
        },
        {
          name: "WorkDocs",
          exp: 42,
          img: "/workdocs.png",
          color: "#369a84"
        }
      ]
    };
  }
};
</script>
