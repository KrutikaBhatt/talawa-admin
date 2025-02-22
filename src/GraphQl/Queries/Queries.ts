import gql from 'graphql-tag';

//Query List

// Check Auth

export const CHECK_AUTH = gql`
  query {
    checkAuth {
      _id
      firstName
      lastName
      image
      email
      userType
    }
  }
`;

// Query to take the Organization list
export const ORGANIZATION_LIST = gql`
  query {
    organizations {
      _id
      image
      creator {
        firstName
        lastName
      }
      name
      members {
        _id
      }
      admins {
        _id
      }
      createdAt
      location
    }
  }
`;

// Query to take the Organization list with filter option
export const ORGANIZATION_CONNECTION_LIST = gql`
  query OrganizationsConnection($filter: String) {
    organizationsConnection(where: { name_contains: $filter }) {
      _id
      image
      creator {
        firstName
        lastName
      }
      name
      members {
        _id
      }
      admins {
        _id
      }
      createdAt
      location
    }
  }
`;

// Query to take the User list

export const USER_LIST = gql`
  query Users($firstName_contains: String, $lastName_contains: String) {
    users(
      where: {
        firstName_contains: $firstName_contains
        lastName_contains: $lastName_contains
      }
    ) {
      firstName
      lastName
      image
      _id
      email
      userType
      adminApproved
      organizationsBlockedBy {
        _id
        name
      }
      joinedOrganizations {
        _id
      }
      createdAt
    }
  }
`;

// Query to take the Organization with data

export const ORGANIZATIONS_LIST = gql`
  query Organizations($id: ID!) {
    organizations(id: $id) {
      _id
      image
      creator {
        firstName
        lastName
        email
      }
      name
      description
      location
      members {
        _id
        firstName
        lastName
        email
      }
      admins {
        _id
        firstName
        lastName
        email
      }
      membershipRequests {
        _id
        user {
          firstName
          lastName
          email
        }
      }
      blockedUsers {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

// Query to take the Members of a particular organization

export const MEMBERS_LIST = gql`
  query Organizations($id: ID!) {
    organizations(id: $id) {
      _id
      members {
        _id
        firstName
        lastName
        image
        email
        createdAt
      }
    }
  }
`;

// Query to filter out all the members with the macthing query and a particular OrgId
export const ORGANIZATIONS_MEMBER_CONNECTION_LIST = gql`
  query Organizations(
    $orgId: ID!
    $firstName_contains: String
    $lastName_contains: String
    $admin_for: ID
    $event_title_contains: String
  ) {
    organizationsMemberConnection(
      orgId: $orgId
      where: {
        firstName_contains: $firstName_contains
        lastName_contains: $lastName_contains
        admin_for: $admin_for
        event_title_contains: $event_title_contains
      }
    ) {
      edges {
        _id
        firstName
        lastName
        image
        email
        createdAt
      }
    }
  }
`;

// To take the list of the oranization joined by a user
export const USER_ORGANIZATION_LIST = gql`
  query User($id: ID!) {
    user(id: $id) {
      firstName
      lastName
      image
      email
      userType
      adminFor {
        _id
        name
        image
      }
    }
  }
`;

// To take the details of a user
export const USER_DETAILS = gql`
  query User($id: ID!) {
    user(id: $id) {
      image
      firstName
      lastName
      email
      appLanguageCode
      userType
      pluginCreationAllowed
      adminApproved
      createdAt
      adminFor {
        _id
      }
      createdOrganizations {
        _id
      }
      joinedOrganizations {
        _id
      }
      organizationUserBelongsTo {
        _id
      }
      organizationsBlockedBy {
        _id
      }
      createdEvents {
        _id
      }
      registeredEvents {
        _id
      }
      eventAdmin {
        _id
      }
      membershipRequests {
        _id
      }
    }
  }
`;

// to take the organization event list
export const ORGANIZATION_EVENT_LIST = gql`
  query EventsByOrganization($id: ID!) {
    eventsByOrganization(id: $id) {
      _id
      title
      description
      startDate
      endDate
      location
      startTime
      endTime
      allDay
      recurring
      isPublic
      isRegisterable
    }
  }
`;

export const ORGANIZATION_EVENT_CONNECTION_LIST = gql`
  query EventsByOrganizationConnection(
    $organization_id: ID!
    $title_contains: String
    $description_contains: String
    $location_contains: String
  ) {
    eventsByOrganizationConnection(
      where: {
        organization_id: $organization_id
        title_contains: $title_contains
        description_contains: $description_contains
        location_contains: $location_contains
      }
    ) {
      _id
      title
      description
      startDate
      endDate
      location
      startTime
      endTime
      allDay
      recurring
      isPublic
      isRegisterable
    }
  }
`;

export const ORGANIZATION_DONATION_CONNECTION_LIST = gql`
  query GetDonationByOrgIdConnection(
    $orgId: ID!
    $id: ID
    $name_of_user_contains: String
  ) {
    getDonationByOrgIdConnection(
      orgId: $orgId
      where: { id: $id, name_of_user_contains: $name_of_user_contains }
    ) {
      _id
      nameOfUser
      amount
      userId
      payPalId
    }
  }
`;

// to take the list of the admins of a particular

export const ADMIN_LIST = gql`
  query Organizations($id: ID!) {
    organizations(id: $id) {
      _id
      admins {
        _id
        firstName
        lastName
        image
        email
        createdAt
      }
    }
  }
`;

// to take the membership request

export const MEMBERSHIP_REQUEST = gql`
  query Organizations($id: ID!) {
    organizations(id: $id) {
      _id
      membershipRequests {
        _id
        user {
          _id
          firstName
          lastName
          email
        }
      }
    }
  }
`;

// display posts

export const ORGANIZATION_POST_LIST = gql`
  query PostsByOrganization($id: ID!) {
    postsByOrganization(id: $id) {
      _id
      title
      text
      imageUrl
      videoUrl
      creator {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const ORGANIZATION_POST_CONNECTION_LIST = gql`
  query PostsByOrganizationConnection(
    $id: ID!
    $title_contains: String
    $text_contains: String
  ) {
    postsByOrganizationConnection(
      id: $id
      where: { title_contains: $title_contains, text_contains: $text_contains }
      orderBy: createdAt_DESC
    ) {
      edges {
        _id
        title
        text
        imageUrl
        videoUrl
        creator {
          _id
          firstName
          lastName
          email
        }
      }
    }
  }
`;
/**
 * @name PLUGIN_GET
 * @description used to fetch list of plugins
 */
export const PLUGIN_GET = gql`
  query getPluginList {
    getPlugins {
      _id
      pluginName
      pluginCreatedBy
      pluginDesc
      pluginInstallStatus
    }
  }
`;
